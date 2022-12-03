import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [img, setImg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImg(!img);
    }, 1500);
  }, [img]);

  return (
    <section className="bg-white dark:bg-back">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="flex flex-col text-center w-full">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              MES INFORMATIONS
            </h2>
          </div>
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            A propos de moi
          </h2>
          <div className="flex mt-6 mb-6 justify-center">
            <div className="w-56 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
            Je {"m'appel"} Sofiane Demette jai 25 ans, je sort {"d'une"}{" "}
            formation M2I qui a durée 8 mois. Nous avons appris les bases du
            developpement web avec des langages assez simple mais aussi de plus
            gros langages accompagnés de frameworks.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={img ? "/images/workspace.png" : "/images/workspace2.png"}
            height={640}
            width={540}
            alt="Poste de travail"
          />
        </div>
      </div>
    </section>
  );
}
