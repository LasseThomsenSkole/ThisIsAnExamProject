import {ScrollArea} from "@radix-ui/react-scroll-area";

export default function Campaign() {
    return(
        <ScrollArea
            className="h-2/5 w-fit rounded-xl p-4 overflow-y-auto scrollbar-thin scrollbar-custom bg-[#48B936] bg-opacity-20">
            <h1 className="text-4xl text-center p-4 font-bold text-[#003811]">Nuværende kampagne</h1>
            <p className="text-2xl p-4 text-[#003811]">
                kampagne tekst <br/>mere
                <br/>mere
                <br/>mere
                <br/> mere
                <br/>mere
                <br/> mere
            </p>
        </ScrollArea>
    )
}