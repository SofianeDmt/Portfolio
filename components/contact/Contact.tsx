import TwitterSVG from "@/images/icons8-twitter.svg"
import MailSVG from "@/images/icons8-mail.svg"
import LinkedinSVG from "@/images/icons8-linkedin.svg"

export default function Contact() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ME CONTACTEZ</h2>
                    </div>
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Vous pouvez me contactez via</h1>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <a href="https://twitter.com/sofianedmt"
                                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <TwitterSVG />
                            </a>
                            <div className="flex-grow">

                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Twitter</h2>
                                <p className="leading-relaxed text-base">Je suis enormement actif sur twitter, vous pouvez me contactez via ce reseau social, je vous repondrez.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <a href="https://fr.linkedin.com/in/sofiane-demette-15ba56203"
                                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <LinkedinSVG height="40px" />
                            </a>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Linkedin</h2>
                                <p className="leading-relaxed text-base">Dans le monde professionel un Linkedin est primordial, nhesitez pas a elargir mon reseau ou a me contacter par ce reseaux social. </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <a href="mailto:sofiane.dmt@hotmail.fr"
                                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <MailSVG height="40px" />
                            </a>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Mail</h2>
                                <p className="leading-relaxed text-base">La methode la plus simple et rapide, cest de menvoyer un email, jattend le votre avec impatience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <section className="bg-white dark:bg-gray-900 mt-16">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Besoin dun renseignement?</h2>
                <div className="flex mt-6 mb-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-sm">Nhesitez pas a remplir le formulaire si vous avez besoin daide, sinon vous pouvez aussi passer par mes reseaux sociaux</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre adresse e-mail</label>
                        <input type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="Quelle est votre adresse email?" required/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Le sujet</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="Quel est le sujet?" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
                        <textarea id="message" rows={6}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Quelle est votre demande?"></textarea>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyez
                    </button>
                </form>
            </div>
        </section>
        </div>
    )
}