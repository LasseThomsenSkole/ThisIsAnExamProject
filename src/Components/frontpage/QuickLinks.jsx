export default function QuickLinks({ links }) {
    return (
        <div className="flex flex-col w-[270px] mt-8 p-3 bg-[#007446] pb-16 rounded-xl">
            <h2 className="text-3xl font-bold text-[#002E0F] mb-3 text-center">Quicklinks</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index} className="mb-3">
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-[#002E0F] font-semibold hover:font-extrabold"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}