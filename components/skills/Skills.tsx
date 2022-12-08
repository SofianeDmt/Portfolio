import Skills_card from "@/components/skills/Skills_card";
import TS from "@/images/tssvg.svg";
import Figma from "@/images/figmasvg.svg";
import Git from "@/images/gitsvg.svg";
import JS from "@/images/jssvg.svg";
import NextJS from "@/images/nextjssvg.svg";
import NodeJS from "@/images/nodejssvg.svg";
import ReactJS from "@/images/reactjssvg.svg";
import SCSS from "@/images/scsssvg.svg";
import TailwindCSS from "@/images/tailwindsvg.svg";
import PHP from "@/images/php.svg";
import Symfony from "@/images/symfony.svg";
import WP from "@/images/wordpress.svg";
import MySQL from "@/images/mysql.svg";
import MongoDB from "@/images/mongodb.svg";
import Presta from "@/images/prestashop.svg";
import Docker from "@/images/dockersvg.svg";
import Stars1 from "@/images/stars.svg";
import Stars0 from "@/images/start_hidden.svg";
import { useState } from "react";
import styles from "@/styles/Skills.module.css";
export default function Skills() {
  const [openSkills, setOpenSkills] = useState<boolean>();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            MES COMPÉTENCES
          </h2>
          <h2 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white">
            Touche a tout
          </h2>
          <div className="flex mt-6 mb-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
          <p>
            Je suis un touche a tout et {"j'essaie"} de me diversifié un maximum
            et sur differents postes possible.
            <br />
            {"J'aime"} apprendre de nouveaux langages et frameworks pour être le
            plus polyvalent possible.
          </p>
        </div>
        <div className="flex flex-wrap justify-around items-center lg:flex-row md:flex-row flex-col w-full -m-4 mx-auto">
          <Skills_card
            Title="Typescript"
            Logo={TS}
            size="130px"
            Stars={Stars0}
          />
          <Skills_card Title="Figma" Logo={Figma} size="130px" Stars={Stars1} />
          <Skills_card Title="Git" Logo={Git} size="130px" Stars={Stars1} />
          <Skills_card
            Title="Javascript"
            Logo={JS}
            size="130px"
            Stars={Stars1}
          />
          <Skills_card
            Title="NextJS"
            Logo={NextJS}
            size="130px"
            Stars={Stars0}
          />
          <Skills_card
            Title="NodeJS"
            Logo={NodeJS}
            size="130px"
            Stars={Stars0}
          />
          <Skills_card
            Title="ReactJS"
            Logo={ReactJS}
            size="130px"
            Stars={Stars0}
          />
          <Skills_card Title="SCSS" Logo={SCSS} size="130px" Stars={Stars1} />
        </div>

        {openSkills ? (
          <div className={styles.openskills}>
            <Skills_card
              Title="TailwindCSS"
              Logo={TailwindCSS}
              size="130px"
              Stars={Stars1}
            />
            <Skills_card
              Title="Symfony"
              Logo={Symfony}
              size="130px"
              Stars={Stars0}
            />
            <Skills_card Title="PHP" Logo={PHP} size="130px" Stars={Stars1} />
            <Skills_card
              Title="Wordpress"
              Logo={WP}
              size="130px"
              Stars={Stars1}
            />
            <Skills_card
              Title="Prestashop"
              Logo={Presta}
              size="130px"
              Stars={Stars0}
            />
            <Skills_card
              Title="MySQL"
              Logo={MySQL}
              size="130px"
              Stars={Stars1}
            />
            <Skills_card
              Title="MongoDB"
              Logo={MongoDB}
              size="130px"
              Stars={Stars0}
            />
            <Skills_card
              Title="Docker"
              Logo={Docker}
              size="130px"
              Stars={Stars1}
            />
          </div>
        ) : null}
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setOpenSkills(!openSkills)}
          className=" text-sm bg-blue-200 hover:scale-105 dark:bg-[#232a2e] text-indigo-500 py-2 px-4 rounded inline-flex items-center"
        >
          {!openSkills
            ? "Voir toutes mes compétences"
            : "Fermer la listes des compétences"}
        </button>
      </div>
    </section>
  );
}
