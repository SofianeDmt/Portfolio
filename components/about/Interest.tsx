import BackendSVG from "@/images/undraw_server_cluster_jwwq.svg";
import DesignSVG from "@/images/undraw_design_tools_-42-tf.svg";
import DevSVG from "@/images/undraw_dev_productivity_re_fylf.svg";
import CMSSVG from "@/images/CMS.svg";

export default function Interest() {
  return (
    <div>
      <div className="flex flex-col text-center w-full mb-10">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font">
          MES INTÊRETS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 dark:text-white">
          Ce qui {"m'interesse"}
        </h1>
        <div className="flex mt-6 mb-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
        <p className="dark:text-[#7f8797]">
          Dans le monde du web il est important {"d'avoir"} de {"l'attrait"}{" "}
          pour beaucoup de choses pour pouvoir elargir ses compétences
        </p>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap justify-around items-center">
        <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 w-fit mx-3 mt-5 shadow-xl transition hover:shadow-sm hover:scale-105">
          <div className="rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-center items-center">
            <DesignSVG />

            <h5 className="text-lg text-gray-300 mt-5 dark:text-black font-medium">
              UI / UX
            </h5>
            <div className="mt-4 flex flex-wrap gap-1"></div>
          </div>
        </article>
        <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 w-fit mx-3 mt-5 shadow-xl transition hover:shadow-sm hover:scale-105">
          <div className="rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-center items-center">
            <DevSVG />

            <h5 className="text-lg text-gray-300 mt-5 dark:text-black font-medium">
              Dev / Logic
            </h5>
            <div className="mt-4 flex flex-wrap gap-1"></div>
          </div>
        </article>
        <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 w-fit mx-3 mt-5 shadow-xl transition hover:shadow-sm hover:scale-105">
          <div className="rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-center items-center">
            <CMSSVG />

            <h5 className="text-lg text-gray-300 mt-5 dark:text-black font-medium">
              CMS
            </h5>
            <div className="mt-4 flex flex-wrap gap-1"></div>
          </div>
        </article>
        <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 w-fit mx-3 mt-5 shadow-xl transition hover:shadow-sm hover:scale-105">
          <div className="rounded-[10px] bg-white p-4 sm:p-6 flex flex-col justify-center items-center">
            <BackendSVG />

            <h5 className="text-lg text-gray-300 mt-5 dark:text-black font-medium">
              Data / Server
            </h5>
            <div className="mt-4 flex flex-wrap gap-1"></div>
          </div>
        </article>
      </div>
    </div>
  );
}
