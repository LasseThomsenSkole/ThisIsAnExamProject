export default function ResultCard({result}) {
    return (
        <div className={"rounded-md shadow-2xl my-2 w-2/5"}>
            <img src={"https://placehold.co/550x550"} alt={""} className={"w-full h-36 object-cover rounded-t-md"}/>
            {result.startDate && <p className={"absolute m-2 font-light"}>{result.startDate}</p>}
            {result.startTime && <p className={"font-light m-2 mb-0 text-right"}>{result.startTime + '-' + result.endTime}</p>}
            <div>
                <h2 className={"font-bold text-[#003811] text-center text-2xl"}>{result.title}</h2>
                <p className={"text-[#003811] truncate py-2 text-lg text-center"}>{result.description}</p>
            </div>
        </div>
    )
}