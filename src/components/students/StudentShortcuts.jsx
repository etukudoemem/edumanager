import { shortcuts } from "./shortcuts"

export const StudentShortcuts = () => {

    return (
        <>
            <main className="p-3 h-auto bg-white my-3 md:mb-3 md:my-0">
                <h1 className="text-xs font-semibold mb-3">Shortcuts</h1>
                <section className="flex gap-y-3 gap-x-2 flex-wrap [&>*:nth-child(4)]:bg-blue-100 [&>*:nth-child(5)]:bg-yellow-100">
                    {
                        shortcuts.map((shortcut) => 
                            <div key={shortcut} className="w-auto h-auto px-2 py-2 odd:bg-pink-100 even:bg-purple-100
                                 rounded cursor-pointer">
                                <p className="text-[10px] whitespace-nowrap">
                                    {shortcut}
                                </p>
                            </div>
                        )
                    }
                </section>
            </main>
        </>
    )
}