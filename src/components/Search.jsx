import { FiSearch } from "react-icons/fi"

export const Search = () => {

    return (
        <>
            <main>
                <section className="flex items-center gap-x-2 border-gray-500 border-1 h-9 
                    px-3 rounded-full text-sm">
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