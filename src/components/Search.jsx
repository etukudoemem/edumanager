import { FiSearch } from "react-icons/fi"

export const Search = () => {

    return (
        <>
            <main>
                <section className="flex items-center gap-x-2 bg-[#f0f0ff] h-9 
                    px-3 rounded text-sm border-0 border-gray-200 shadow-sm">
                    <FiSearch className=""/>
                    <input className="bg-transparent outline-none"
                        type="text"
                        placeholder="search..."
                    />
                </section>
            </main>
        </>
    )
}