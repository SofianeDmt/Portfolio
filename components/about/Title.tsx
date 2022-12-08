import styles from "@/styles/Title.module.css";

export default function Title() {
  return (
    <section className={styles.section_title}>
      <div className={styles.title_container}>
        <h4 className="text-[12px] text-indigo-500 tracking-widest font-medium uppercase">
          Bienvenue sur mon portfolio
        </h4>
        <div className={[styles.title, "dark:text-rockblue"].join(" ")}>
          <h2>
            DÉVELOPPEUR WEB
            <br />
            <p className={styles.title_and}>&</p>Designer
          </h2>
        </div>
        <div className={styles.sub_title}>
          <p className="font-medium">
            Retrouvez ma présentation, mes compétences, mes passions
            <br /> ainsi que mon CV
          </p>
        </div>

        <div className="mt-10">
          <a target="_blank" href="/upload/Sofiane_Demette_CV.pdf">
            <button className="text-[12px] bg-blue-200 hover:scale-105 dark:bg-[#232a2e] text-indigo-500 py-2 px-4 rounded inline-flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Tu peux aussi visualisé ou télécharger mon CV ici</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
