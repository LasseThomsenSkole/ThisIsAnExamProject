import {Input} from "@/Components/ui/input.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {useState} from "react";
import {useNavigate} from "react-router";

export default function SearchInput() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?keyword=${search}`)

    }
    return (
        <form className={"flex flex-row"} onSubmit={handleSubmit}>
            <Input type="text" value={search} placeholder="Search" className={"border-2 border-gray-200 rounded-md p-2 w-1/3 text-gray-700"}
            onChange={(e) => setSearch(e.target.value)}/>
            <Button type="submit" className={"bg-[#003811] text-white rounded-md p-2"} >
                Search
            </Button>
        </form>
    )
}