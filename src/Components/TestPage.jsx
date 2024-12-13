import { useEffect, useState } from "react";
import Header from "./header/Header.jsx";

export default function contactInfo() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/user/contacts")
            .then((response)=>response.json())
            .then((user)=> {
                setData(user);
                console.log(user);
            })
            .catch((error) => console.error("Errormessage", error))
    }, []);

    const contactData = [
        {
            id: 1,
            name: 'Michelle Hantamil',
            email:'michelle@hotmail.com',
            phoneNumber: '20394875',
        },
        {
            id: 2,
            name: 'Andrea Ryholt',
            email:'andrea@hotmail.com',
            phoneNumber: '20394875',
        },
        {
            id: 3,
            name: 'Lasse Thomsen',
            email:'lasse@hotmail.com',
            phoneNumber: '20394875',
        },
        {
            id: 4,
            name: 'Michelle Hantamil',
            email:'michelle@hotmail.com',
            phoneNumber: '20394875',
        },
        {
            id: 5,
            name: 'Michelle Hantamil',
            email:'michelle@hotmail.com',
            phoneNumber: '20394875',
        },
        {
            id: 6,
            name: 'Michelle Hantamil',
            email: 'michelle@hotmail.com',
            phoneNumber: '20394875'
        }
    ];


    return (
        <>
            <Header/>
            <h1 className="text-4xl text-[#003811] font-bold mb-2 pt-20 pb-14" align="center">Medarbejder liste</h1>
                {contactData.map((user, index) => (
                    <div align="center" >
                    <div  className="rounded-md w-1/3 shadow-xl my-2 border border-[#003811] p-2 bg-white" key={user.id || index}>
                        <h2 className="font-bold text-[#003811]">{user.name}</h2>
                        <h2 className=" text-[#003811]">{user.email}</h2>
                        <h2 className=" underline text-[#003811]">{user.phoneNumber}</h2>
                        <div className="pt-4">
                        <button className="rounded-md pl-4 pr-4 border border-[#003811] bg-[#009552]">Rediger</button>
                        </div>
                    </div>
                    </div>
                ))}
        </>
    );
}
