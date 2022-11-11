import Skills_card from "@/components/skills/Skills_card";
import TS from "@/images/tssvg.svg"
import Figma from "@/images/figmasvg.svg"
import Git from "@/images/gitsvg.svg"
import JS from "@/images/jssvg.svg"
import NextJS from "@/images/nextjssvg.svg"
import NodeJS from "@/images/nodejssvg.svg"
import ReactJS from "@/images/reactjssvg.svg"
import SCSS from "@/images/scsssvg.svg"
import TailwindCSS from "@/images/tailwindsvg.svg"
import Stars1 from "@/images/stars.svg"
import Stars0 from "@/images/start_hidden.svg"


export default function Skills() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">MES COMPÉTENCES</h2>
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Touche a tout</h2>
                    <div className="flex mt-6 mb-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                    <p>Je suis un touche a tout et jessaie de me diversifié un maximum et sur differents postes possible</p>
                </div>
                <div className="flex flex-wrap justify-around items-center lg:flex-row md:flex-row flex-col w-full -m-4 mx-auto">
                    <Skills_card Title="Typescript" Logo={TS} size="130px" Stars={Stars0}/>
                    <Skills_card Title="Figma" Logo={Figma} size="130px" Stars={Stars1}/>
                    <Skills_card Title="Git" Logo={Git} size="130px" Stars={Stars1}/>
                    <Skills_card Title="Javascript" Logo={JS} size="130px" Stars={Stars1}/>
                    <Skills_card Title="NextJS" Logo={NextJS} size="130px" Stars={Stars0}/>
                    <Skills_card Title="NodeJS" Logo={NodeJS} size="130px" Stars={Stars0}/>
                    <Skills_card Title="ReactJS" Logo={ReactJS} size="130px" Stars={Stars0}/>
                    <Skills_card Title="SCSS" Logo={SCSS} size="130px" Stars={Stars1}/>
                    <Skills_card Title="TailwindCSS" Logo={TailwindCSS} size="130px" Stars={Stars1}/>
                </div>
            </div>
        </section>
    )
}