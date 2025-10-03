import { Logo } from "../Logo"
import { MenuItems } from "./MenuItems"
import { AiFillHome } from "react-icons/ai"

export const SideMenu = () => {

    return (
        <>
            <main>
                <section className="pt-4 px-2">
                    <Logo />
                </section>
                <section className="mt-5">
                    <MenuItems />
                </section>
            </main>
        </>
    )
}