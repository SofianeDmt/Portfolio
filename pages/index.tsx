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
import MytsParticles from "@/components/tsparticles/TSparticles";
import MytsParticles2 from "@/components/tsparticles/TSparticles2";

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
        <meta
          name="title"
          content="Sofiane Dmt - Bienvenue sur mon Portfolio "
        />
        <meta
          name="description"
          content="Sofiane Dmt. Bienvenue sur mon site personnel, sur celui-ci, retrouvez toutes les informations concernant Sofiane Dmt."
        />
        <meta
          name="keywords"
          content="SofianeDmt, Sofiane Demette, Sofiane Dmt, Sofiane Développeur, Développeur NextJS, Développeur ReactJS, Développeur Web, Web Developper, M2I, Lille, Designer, Sofiane Designer, Web Designer, HTML, CSS, SCSS, Symfony, PHP, Jeune Développeur Web, NextJS, ReactJS, NodeJS, Développeur Valenciennes, Développeur Lille, Front-End, Développeur web Valenciennes"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
        <meta name="language" content="French" />
        <meta name="revisit-after" content="1 day" />
        <meta name="author" content="Sofiane Demette" />
      </Head>

      <main>
        <Navbar_Project />
        <div>
          <MytsParticles />
          <Title />
        </div>
        <section className="dark:bg-mirage py-10">
          <Interest />
        </section>
        <section id="INFO" className="mt-28 relative">
          <MytsParticles2 />
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
