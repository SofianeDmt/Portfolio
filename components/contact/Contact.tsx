import TwitterSVG from "@/images/icons8-twitter.svg";
import MailSVG from "@/images/icons8-mail.svg";
import LinkedinSVG from "@/images/icons8-linkedin.svg";
import { useEffect, useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email != "" && subject != "" && message != "") {
      if (regex.test(email)) {
        let data = {
          subject,
          email,
          message,
        };
        setSubmitted(true);
        fetch("/api/mail", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {});
      }
      setError(true);
    }
    if (email == "" || subject == "" || message == "") {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [error]);

  useEffect(() => {
    if (submitted) {
      setMessage("");
      setEmail("");
      setSubject("");
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  }, [submitted]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              ME CONTACTEZ
            </h2>
          </div>
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Vous pouvez me contactez via
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <a
                href="https://twitter.com/sofianedmt"
                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
              >
                <TwitterSVG />
              </a>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Twitter
                </h2>
                <p className="leading-relaxed text-base">
                  Je suis enormement actif sur twitter, vous pouvez me contactez
                  via ce reseau social, je vous repondrez.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <a
                href="https://fr.linkedin.com/in/sofiane-demette-15ba56203"
                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
              >
                <LinkedinSVG height="40px" />
              </a>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Linkedin
                </h2>
                <p className="leading-relaxed text-base">
                  Dans le monde professionel un Linkedin est primordial,
                  nhesitez pas a elargir mon reseau ou a me contacter par ce
                  reseaux social.{" "}
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <a
                href="mailto:sofiane.dmt@hotmail.fr"
                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
              >
                <MailSVG height="40px" />
              </a>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Mail
                </h2>
                <p className="leading-relaxed text-base">
                  La methode la plus simple et rapide, cest de menvoyer un
                  email, jattend le votre avec impatience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 mt-16">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Besoin dun renseignement?
          </h2>
          <div className="flex mt-6 mb-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-sm">
            Nhesitez pas a remplir le formulaire si vous avez besoin daide,
            sinon vous pouvez aussi passer par mes reseaux sociaux
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Votre adresse e-mail
              </label>
              <input
                value={email}
                type="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Quelle est votre adresse email?"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Le sujet
              </label>
              <input
                value={subject}
                type="text"
                id="subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Quel est le sujet?"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Votre message
              </label>
              <textarea
                value={message}
                id="message"
                rows={6}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Quelle est votre demande?"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Envoyez
            </button>
          </form>
          {submitted ? (
            <div
              className="bg-green-100 mt-5 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Envoyé! </strong>
              <span className="block sm:inline">
                Votre message a bien etait envoyé. Je ferais de mon mieux pour
                repondre rapidement.
              </span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-green-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          ) : null}
          {error ? (
            <div
              className="bg-red-100 mt-5 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Erreur! </strong>
              <span className="block sm:inline">
                Un champ est vide ou mal renseigné.
              </span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
