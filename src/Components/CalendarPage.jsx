import React, { useEffect, useState } from "react";
import {Calendar} from "../components/ui/calendar.jsx"
import Header from "../Components/header/Header.jsx";
import CourseList from "../Components/CourseList.jsx"
import MiniHeader from "../Components/frontpage/MiniHeader.jsx";

export default function CalendarPage() {
    const [date, setDate] = useState(new Date());
    const [courses, setCourses] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredCourses, setFilteredCourses] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/kalender/coursefeed")
            .then((response)=>response.json())
            .then((data)=> {
                setCourses(data);
                console.log(data);
            })
            .catch((error) => console.error("Errormessage", error))
    }, []);

    useEffect(() => {
        const filtered = courses.filter((course) => {
            const courseDate = new Date(course.date);
            return (
                courseDate.getFullYear() === selectedDate.getFullYear() &&
                courseDate.getMonth() === selectedDate.getMonth() &&
                courseDate.getDate() === selectedDate.getDate()
            );
        });
        setFilteredCourses(filtered);
    }, [selectedDate, courses]);



    const getUserId = () => {
         try {
             const token = localStorage.getItem("jwtToken");
             const decodedToken = jwtDecode(token);
             return decodedToken.id;
         }
         catch (error){
             console.log("error", error);
             return null;
         }
     }


    const registerUser = (courseId) => {
        const userId = getUserId();
        if (!userId) {
            alert("User not logged in!");
            return;
        }
        fetch("http://localhost:8080/kalender/{courseId}/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Registered");
                }
                else {
                     console.error("Error")
                }
            })
    }


    return (
        <>
            <Header/>
            <MiniHeader/>
            <div className="justify-center mx-80 flex mt-8">
                <div className="flex flex-col w-full">
            <Calendar mode="single" selected={date} onSelect={setSelectedDate} />
                    <h3 className="text-3xl font-semibold text-[#003811] mb-2">Kurser d. {selectedDate.toLocaleDateString()}</h3>

                    {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div key={course.id} className="mb-4">
                    <h4 className="font-bold text-xl text-[#003811]">{course.title}</h4>
                    <p className="flex items-center text-[#003811]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>{course.date}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 h-6 w-6 ml-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>{course.startTime} - {course.endTime}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 h-6 w-6 ml-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>{course.location}</p>
                    <p>{course.description}</p>
                                    <button className="bg-red-500 flex border rounded-xl p-3" onClick={() => registerUser(course.id)}>Tilmeld</button>
                </div>
                            ))):(
                                    <p>Der er desværre ingen kurser denne dato</p>
                            )}
            </div>
                <div className="flex flex-col w-full ">
                    {/*onclick virker ikke*/}
                    <CourseList onCourseClick={(courseDate) => setSelectedDate(new Date(courseDate))}/>
                </div>
            </div>
        </>
    );
}
