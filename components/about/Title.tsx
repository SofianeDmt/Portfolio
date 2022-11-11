import styles from '@/styles/Title.module.css'

export default function Title() {
    return (
        <section className={styles.section_title}>
            <div className={styles.title_container}>
                    <h4 className="text-[10px] text-indigo-500 tracking-widest font-medium uppercase">Bienvenue sur mon portfolio</h4>
                <div className={styles.title}>
                    <h2>Developer Web<br/><p className={styles.title_and}>&</p>Designer
                    </h2>
                </div>
                <div className={styles.sub_title}>
                    <p>
                        Retrouvez ma présentation, mes compétences, mes passions<br/> ainsi que mon CV
                    </p>
                </div>
                <div className="mt-20 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}