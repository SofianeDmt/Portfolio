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
import Project from "@/components/project/Project";
import InverseProject from "@/components/project/InverseProject";
import LogoAndromed from "@/images/logoandromed.svg";

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
        <section id="PROJET" className="md:my-20 my-10">
          <div className="mx-auto -mt-5 max-w-screen-xl px-4">
            <div className="flex flex-col text-center w-full">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                MES PROJETS
              </h2>
            </div>
            <h2 className="mb-28 lg:mb-24 text-xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
              Mes réalisations personnelles
            </h2>
          </div>
          <Project
            enterpriseLink="https://www.andromed.fr/"
            facebook="https://www.facebook.com/andromedweb/"
            linkedin="https://www.linkedin.com/in/jimmylan-s-565958142/"
            title="Site Web"
            enterprise="Andromed"
            status="En cours"
            image="/images/andromedsite.png"
            content="Refonte graphique et profonde (UI / UX) du site de la société
            Andromed avec NextJS comme framework."
          />
        </section>
        <section className="md:py-20 dark:bg-mirage py-10">
          <InverseProject
            enterpriseLink="https://payspicards.centres-sociaux.fr/"
            facebook="https://www.facebook.com/fedepayspicards/"
            linkedin="https://www.linkedin.com/company/centres-sociaux-connect%C3%A9s-des-pays-picards/"
            title="Site Web"
            enterprise="Centre Sociaux Connécté Picardie"
            status="En cours"
            image="/images/csconnectsite.png"
            content="Création d'un site complet de gestion d'ateliers et de sessions ou les membres du centre peuvent se positionner pour y participer. Gestion de rôle, CRUD, statistique des centres, des sessions, des ateliers, agenda événements et cloud fichiers."
          />
        </section>
        <section className="md:py-10">
          <Project
            enterpriseLink="https://www.sofianedmt.com/"
            twitter="https://twitter.com/SofianeDmt"
            linkedin="https://www.linkedin.com/in/sofianedmt/"
            link="https://sofianedmt.github.io/"
            title="Site Web"
            enterprise="Sofiane Demette"
            status="Terminé"
            image="/images/firstportfolio.png"
            content="Création de mon premier Portfolio / CV pendant mes études et heberger sur github pour la facilité lors de mes début. Il regoupe les différents projets que j'ai pu réalisé lors de mon cursus d'apprentissage."
          />
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
