const menuItems = [
    {
        name: "Glas katalog",
        link: ""
    },
    {
        name: "Lens Overview ",
        link: ""
    },
    {
        name: "Eksternt glas katalog",
        link: ""
    },
    {
        name: "Ekstern glas prisliste",
        link: ""
    },
    {
        name: "Kontaktlinse prisliste",
        link: ""
    },
    {
        name: "Mega Range linser",
        link: ""
    },
]
export default function MiniHeader() {
    return (
        <header className={"bg-[#003811] text-white text-lg p-2"}>
            <ul className={"flex flex-row justify-center items-center"}>
                {menuItems.map((item, index) => (
                    <li key={index} className={"text-center mx-3 hover:font-bold"}>
                        <a target="_blank" rel="noopener noreferrer" href={item.link}>{item.name}</a>
                    </li>)
                )}
            </ul>

        </header>
    )
}
