import LogoAndromed from "@/images/logoandromed.svg";

export default function Clients() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col text-center w-full">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            MES PARTENAIRES
          </h2>
        </div>
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Ils {"m'ont"} fait confiance
        </h2>
        <div className="justify-around flex text-gray-500 dark:text-gray-400 mt-10 flex-col md:flex-row lg:flex-row">
          <a href="#" className="flex justify-center items-center mt-10">
            <LogoAndromed className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
