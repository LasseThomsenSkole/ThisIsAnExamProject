export default function NewsList({news}) {
    return (
        <div>
            {news.length === 0
                ? <p>No news found</p> :
                <ul>
                    {news.map(news => <li key={news.id}>
                        <div className={"rounded-md w-full shadow-2xl my-2"}>
                            <img src={"https://placehold.co/550x550"} alt={news.title} className={"w-full h-36 object-cover rounded-t-md"}/>
                            <div>
                                <h2 className={"font-bold text-[#003811] text-center text-2xl"}>{news.title}</h2>
                                <p className={"text-[#003811] truncate py-2 text-lg"}>{news.description}</p>
                            </div>
                        </div>

                    </li>)}
                </ul>
            }
        </div>
    )
}