import { Logo } from "../Logo"
import { MenuItems } from "./MenuItems"

export const SideMenu = () => {

    return (
        <>
            <main>
                <section className="pt-4 px-0 pb-5">
                    <Logo />
                </section>
                <section className="mt-5">
                    <MenuItems />
                </section>
            </main>
        </>
    )
}