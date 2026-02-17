import { FileText, MessageCircle } from "lucide-react";

export function Aboutme() {
  return (
    <>
      <section className="min-h-[80vh] bg-neutral-800 px-4 md:px-8">
        <div className="text-center pt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-400 mb-4">
            <span className="text-indigo-200">{"{ "}</span>
            Über mich
            <span className="text-indigo-200">{" }"}</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 md:mt-10 gap-6 lg:gap-0">
          <div className="text-center relative">
            <h1 className="text-left text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-400 p-4">
              <span className="text-indigo-200">//</span> Aktuelles und Hobbys
            </h1>
            <div className="text-left px-4 space-y-4">
              <p className="text-indigo-300 text-lg sm:text-xl md:text-2xl">
                Ich studiere seit <span className="text-cyan-400 font-semibold">2023</span> Praktische Informatik (B. Sc.) an der
                Hochschule für Technik und Wirtschaft des Saarlandes.
              </p>
              
              <p className="text-indigo-300/90 text-base sm:text-lg md:text-xl">
                In meiner Freizeit beschäftige ich mich gerne mit der <span className="text-indigo-400 font-semibold">Entwicklung von Spielen</span>.
                In der Vergangenheit habe ich bereits sehr viel Zeit in das Entwickeln von einem MMO-Lifesimulatorplugin für meinen Minecraftserver 
                <span className="inline-block mx-1 px-2 py-0.5 bg-indigo-600/30 rounded text-cyan-300 font-medium">Lunania</span> 
                investiert, das ich seit <span className="text-cyan-400 font-semibold">2015</span> programmiere und weiterentwickle.
              </p>
              
              <p className="text-indigo-300/90 text-base sm:text-lg md:text-xl">
                Mein aktueller Fokus liegt auf meinem Onlinespiel 
                <span className="inline-block mx-1 px-2 py-0.5 bg-indigo-600/30 rounded text-cyan-300 font-medium">Kytress TCG</span>, 
                das ich seit Ende <span className="text-cyan-400 font-semibold">2025</span> entwickle.
                Es handelt sich um ein digitales <span className="text-indigo-400 font-semibold">Sammelkartenspiel</span>, das ich von Grund auf selbst programmiere.
              </p>
              
              <p className="text-indigo-300/80 text-sm sm:text-base md:text-lg italic">
                Neben der Spieleentwicklung interessiere ich mich auch für <span className="text-indigo-400 font-semibold not-italic">Webentwicklung</span> und <span className="text-indigo-400 font-semibold not-italic">Softwarearchitektur</span>.
              </p>
            </div>
            <div className="relative mt-6 md:mt-10">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-600/60 to-transparent"></div>
              <div className="flex text-neutral-200">
                <a
                  className="flex-1 flex flex-col items-center justify-center py-6 px-4 hover:bg-neutral-600/10 transition-colors duration-200 cursor-pointer"
                  href="downloads/CV_Lebenslauf.pdf"
                  download
                >
                  <span className="mb-2">
                    <FileText />
                  </span>
                  <span>Lebenslauf</span>
                </a>
                <div className="w-px bg-gradient-to-b from-neutral-600/60 to-transparent"></div>
                <a
                  className="flex-1 flex flex-col items-center justify-center py-6 px-4 hover:bg-neutral-600/10 transition-colors duration-200 cursor-pointer"
                  href="#kontakt"
                >
                  <span className="mb-2">
                    <MessageCircle />
                  </span>
                  <span>Kontakt</span>
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent lg:top-0 lg:right-0 lg:left-auto lg:w-0.5 lg:h-full lg:bg-gradient-to-b"></div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-4 text-base sm:text-lg md:text-xl">
              <h1 className="text-left text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-400 pb-4">
                <span className="text-indigo-200">//</span> Über mich
              </h1>
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-white px-5 py-0.5 bg-indigo-400 rounded text-sm sm:text-base">
                  Alter
                </h1>
                <p className="text-indigo-300 pr-5">{myAge} Jahre</p>
              </div>
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-white px-5 py-0.5 bg-indigo-400 rounded text-sm sm:text-base">
                  Erfahrung
                </h1>
                <p className="text-indigo-300 pr-5">8+ Jahre</p>
              </div>
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-white px-5 py-0.5 bg-indigo-400 rounded text-sm sm:text-base">
                  Sprachen
                </h1>
                <p className="text-indigo-300 pr-5">Deutsch/Englisch</p>
              </div>
            </div>
            <div className="p-4 text-base sm:text-lg md:text-xl">
              <div className="relative top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>
              <h1 className="text-t-1 text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-400 pb-4">
                <span className="text-indigo-200">//</span> Bisherige
                Arbeitgeber
              </h1>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <a
                  href="https://www.aldi-sued.de/"
                  className="rounded p-4 sm:p-6 md:p-8 md:px-30 flex items-center justify-center"
                >
                  <img
                    className="grayscale-80 hover:grayscale-20 transition-grayscale duration-400 cursor-pointer w-full h-auto"
                    src="images/aldi_sued.jpg"
                    alt="Aldi Süd"
                  />
                </a>
                <a
                  href="https://www.zbb-saar.de/"
                  className="rounded p-4 sm:p-6 md:p-8 md:px-30 flex items-center justify-center"
                >
                  <img
                    className="grayscale-80 hover:grayscale-20 transition-grayscale duration-400 cursor-pointer w-full h-auto"
                    src="images/zbb_saar.png"
                    alt="ZBB Saar"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function calculateAge(birthdate: string): number {
  const today = new Date();
  const birth = new Date(birthdate);
  let age = today.getFullYear() - birth.getFullYear();

  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

const myAge: number = calculateAge("2003-07-24");