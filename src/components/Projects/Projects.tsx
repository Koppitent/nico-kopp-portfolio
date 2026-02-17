import { ExternalLink, Gamepad2, Layers } from "lucide-react";
import { SiGithub } from "react-icons/si";

export function Projects() {
	return (
    <>
      <section className="min-h-[80vh] bg-neutral-800 px-4 md:px-8">
        <div className="text-center pt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-400 mb-4">
            <span className="text-indigo-200">{"{ "}</span>
            Projekte
            <span className="text-indigo-200">{" }"}</span>
          </h1>
        </div>
        <div className="mt-10 pb-10 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="bg-neutral-900 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <iframe
                src="./games/pico-game/index.html"
                className="w-full h-full border-0"
                title="Room Shooter Preview"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Gamepad2 className="text-indigo-400" size={28} />
                <h2 className="text-3xl font-bold text-indigo-300">
                  Room Shooter
                </h2>
              </div>
              <p className=" text-neutral-300 text-lg">
                Ein klassisches Pico-8 Shooter-Spiel im Retro-Stil. Entwickelt
                als Projekt für das Modul 'Game Design & Development'.
                Klassische Top-Down-Shooter-Mechaniken mit abprallenden Kugeln,
                zerstörbaren Wänden und mehr.
              </p>
              <div className="flex gap-4">
                <a
                  href="./games/pico-game/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded hover:bg-cyan-600 transition-colors duration-200 text-neutral-200"
                >
                  <Gamepad2 size={20} />
                  <span>Spielen</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="text-indigo-400" size={28} />
                <h2 className="text-3xl font-bold text-indigo-300">
                  Kytress TCG
                </h2>
              </div>
              <p className="text-neutral-300 text-lg">
                Ein Trading Card Game Projekt bei dem es um das Erspielen und
                Sammeln von Karten geht. Dabei werden alle Spiele einzeln als
                Microservices in Spring entwickelt und funktionieren über
                Websockets direkt Live. Das Frontend ist mit Angular umgesetzt.
                Das Projekt ist aktuell in Entwicklung, eine Demo-Version ist
                aber bereits spielbar. In diesem Projekt konnte ich viele neue
                Erfahrungen sammeln, wie z.B. meine erste Hexagonale Architektur
                für das CardArena Spiel.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://tcg.kytress.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded hover:bg-cyan-600 transition-colors duration-200 text-neutral-200"
                >
                  <span>Website besuchen</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <div className="bg-neutral-900 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <img
                src="images/kytress_tcg.png"
                className="w-full h-full border-0"
                title="Kytress TCG Preview"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="bg-neutral-900 rounded-lg overflow-visible h-96 flex items-center justify-center relative">
              <img
                src="images/lunania_preview.png"
                className="w-full h-full object-cover border-0 rounded-lg"
                title="Lunania Minecraft Plugin Preview"
                alt="Lunania Server Preview"
              />
              <img
                src="images/Lunania.png"
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md z-10"
                alt="Lunania Logo"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="text-indigo-400" size={28} />
                <h2 className="text-3xl font-bold text-indigo-300">
                  Lunania Minecraft Plugin
                </h2>
              </div>
              <p className="text-neutral-300 text-lg">
                Ein umfangreiches Minecraft-Plugin für meinen privaten Server
                Lunania. Das Plugin bietet eine MMO-Lebenssimulation mit Features wie Grundstücken, Wirtschaftsystem mit Banken, Shops,
								 Jobs, Quests, Missions und vielem mehr. Es ist komplett in Java mit der Spigot API entwickelt und manipuliert an einigen Stellen den Servercode auch direkt um Features wie NPC's zu ermöglichen.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Koppitent/Lunania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded hover:bg-cyan-600 transition-colors duration-200 text-neutral-200"
                >
                  <span className="flex items-center gap-2"> <SiGithub /> GitHub Repository</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}