import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import LogoSVG from "@/images//logolight.svg";
import LogoSVGlight from "@/images//logodark.svg";

export default function Navbar_Project() {
  const [DarkMode, setDarkMode] = useState<Boolean>(false);

  useEffect(() => {
    const Dark = document.getElementById("HTML");
    let theme = localStorage.getItem("theme");
    if (theme === "light") {
      Dark!.classList.remove("dark");
      setDarkMode(false);
    } else {
      Dark!.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  function HandleDarkMode() {
    const Dark = document.getElementById("HTML");
    if (Dark!.className == "dark") {
      Dark!.classList.remove("dark");
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    } else {
      Dark!.classList.add("dark");
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <div className="dark:bg-back">
      <Navbar fluid={true} rounded={true} className="dark:bg-[#111517]">
        <Navbar.Brand href="/">
          {DarkMode ? (
            <LogoSVGlight className="-mt-1" />
          ) : (
            <LogoSVG className="-mt-1" />
          )}
        </Navbar.Brand>
        <Navbar.Toggle className="dark:bg-back" />
        <Navbar.Collapse className="text-center text-sm lg:text-md dark:text-tide dark:bg-back">
          <Navbar.Link href="/" active={true}>
            Accueil
          </Navbar.Link>
          <Navbar.Link href="#INFO">A propos</Navbar.Link>
          <Navbar.Link href="#PROJET">Mes projets</Navbar.Link>
          <Navbar.Link href="#Contact">Contact</Navbar.Link>
          <Navbar.Link>
            <button onClick={() => HandleDarkMode()}>
              {DarkMode ? "Light" : "Dark"}
            </button>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
