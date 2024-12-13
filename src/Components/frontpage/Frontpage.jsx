import Header from "../header/Header.jsx"
import {ScrollArea} from "@radix-ui/react-scroll-area";
import NewsList from "@/Components/frontpage/NewsList.jsx";
import {useEffect, useState} from "react";
import MiniHeader from "@/Components/frontpage/MiniHeader.jsx";
import AdminChart from "@/Components/frontpage/AdminChart.jsx";
import Campaign from "@/Components/frontpage/Campaign.jsx";
import QuickLinks from "@/Components/frontpage/QuickLinks.jsx";




export default function Frontpage() {
    const [news, setNews] = useState([]) // skal muligvis være et andet sted ?
    const [role, setRole] = useState("USER"); //user for nu, så vi kan se det på 5174

    useEffect(() => {
        fetch("http://localhost:8080/news/search")
            .then(response => response.json()).then(data => setNews(data.content))
    }, []);

    const quicklinks = {
        USER: [
            {label: "link 1", href: "#"},
            {label: "link 1", href: ""},
            {label: "link 1", href: ""},
            {label: "link 1", href: ""},
            {label: "link 1", href: ""},
            {label: "link 1", href: ""},
            {label: "link 1", href: "#"},
        ],
    };

    return (
        <>
            <Header/>
            <MiniHeader/>
            <main className={"flex justify-center"}>

                <div className="flex gap-8 max-w-6xl h-[85vh] justify-center bg-transparent">
                    <ScrollArea
                        className="flex flex-col h-[75vh] w-1/3 rounded-xl p-4 bg-white overflow-y-auto scrollbar-thin my-8">
                        <NewsList news={news}/>
                    </ScrollArea>
                    <div className="flex-col w-3/5 mt-8 h-[75vh]">
                        <Campaign/>
                        <div className="flex justify-between gap-2 items-center">
                            <QuickLinks links={quicklinks[role]}/>
                            <AdminChart/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}