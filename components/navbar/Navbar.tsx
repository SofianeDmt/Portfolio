import { Navbar } from "flowbite-react";
import {useEffect, useState} from "react";

export default function Navbar_Project() {
    const [DarkMode, setDarkMode] = useState<Boolean>(true);

    useEffect(() => {
        const Dark = document.getElementById("HTML");
        let theme = localStorage.getItem('theme');
        if (theme === 'light') {
            Dark!.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);

    function HandleDarkMode() {
        const Dark = document.getElementById("HTML");
        if (Dark!.className == 'dark') {
            Dark!.classList.remove('dark');
            setDarkMode(false);
            localStorage.setItem('theme', 'light');
        } else {
            Dark!.classList.add('dark');
            setDarkMode(true);
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <img id="logo"
                    src="/images/logo.gif"
                    className="mr-3 relative h-20"
                    alt="Logo Sofiane Dmt"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="text-center text-sm lg:text-md">
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Accueil
                </Navbar.Link>
                <Navbar.Link href="#INFO">
                    A propos
                </Navbar.Link>
                <Navbar.Link href="#Contact">
                    Contact
                </Navbar.Link>
                <Navbar.Link>
                    <button onClick={()=> HandleDarkMode()}>
                        {DarkMode ? "Light" : "Dark" }
                    </button>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}