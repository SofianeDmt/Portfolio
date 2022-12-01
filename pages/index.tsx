import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar_Project from "../components/navbar/Navbar";
import Clients from "@/components/clients/Clients";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Skills from "../components/skills/Skills";
import Title from "../components/about/Title";
import Footer_section from "../components/footer/Footer";
import Interest from "@/components/about/Interest";
import { useEffect, useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>SofianeDmt - Welcome to my Portfolio</title>
        <meta name="Homepage" content="Portfolio de Sofiane Demette" />
      </Head>

      <main>
        <Navbar_Project />
        <Title />
        <Interest />
        <section id="INFO" className="mt-28">
          <About />
        </section>
        <section className="my-10">
          <Skills />
        </section>
        <section className="my-10">
          <Clients />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>

      <footer>
        <Footer_section />
      </footer>
      {scroll ? (
        <button onClick={() => scrollToTop()} className={styles.returnUP}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
