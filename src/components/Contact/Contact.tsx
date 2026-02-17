import { Mail, MapPin, Phone } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Contact() {
	return (
    <>
      <section id="kontakt" className="min-h-[80vh] px-4 md:px-8">
        <div className="text-center pt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-400 mb-4">
            <span className="text-indigo-200">{"{ "}</span>
            Kontakt
            <span className="text-indigo-200">{" }"}</span>
          </h1>
        </div>
        
        <div className="max-w-4xl mx-auto mt-10 pb-10">
          <div className="text-center mb-10">
            <p className="text-neutral-300 text-lg md:text-xl">
              Ich freue mich über Ihre Kontaktaufnahme! Ob für Projektanfragen, 
              Karrieremöglichkeiten oder einfach zum Austausch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-700/50 p-6 rounded-lg hover:bg-neutral-700 transition-colors duration-200 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-indigo-300 font-semibold text-lg mb-1">E-Mail</h3>
                  <a 
                    href="mailto:mail@nkopp.de"
                    className="text-neutral-300 hover:text-cyan-400 transition-colors"
                  >
                    mail@nkopp.de
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-700/50 p-6 rounded-lg hover:bg-neutral-700 transition-colors duration-200 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-indigo-300 font-semibold text-lg mb-1">Telefon</h3>
                  <a 
                    href="tel:+4915734426235" 
                    className="text-neutral-300 hover:text-cyan-400 transition-colors"
                  >
                    +49 1573 4426235
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-700/50 p-6 rounded-lg hover:bg-neutral-700 transition-colors duration-200 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-indigo-300 font-semibold text-lg mb-1">Adresse</h3>
                  <p className="text-neutral-300">
                    66280 Sulzbach<br />
										Saarland<br />
                    Deutschland
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-700/50 p-6 rounded-lg hover:bg-neutral-700 transition-colors duration-200 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <SiGithub className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-indigo-300 font-semibold text-lg mb-1">Social Media</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://github.com/Koppitent" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-300 hover:text-cyan-400 transition-colors"
                    >
                      <SiGithub size={18} />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/nico-koppy" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-300 hover:text-cyan-400 transition-colors"
                    >
                      <SiLinkedin size={18} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block bg-indigo-600/20 border border-indigo-400/30 rounded-lg px-6 py-4">
              <p className="text-indigo-300 text-lg">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Aktuell offen für neue Möglichkeiten
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}