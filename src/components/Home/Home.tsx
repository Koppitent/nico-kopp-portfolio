import { SiGithub } from "react-icons/si";
import "./Home.css";
import { Mail } from "lucide-react";

export function Home() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-32 lg:gap-55 px-4 md:px-8 py-8 md:py-12">
        <div className="w-full md:w-96 text-center md:text-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-indigo-400 font-mono">
            Hi, Ich bin Nico Kopp!
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl text-indigo-300">
            Student der Praktischen Informatik
          </p>
          <div className="flex gap-3 text-neutral-200 items-center justify-center p-4">
            <a
              href="https://github.com/Koppitent"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              <SiGithub size={35} />
            </a>
            <a
              href="mailto:koppy.nico@gmail.com"
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              <Mail size={35} />
            </a>
          </div>
        </div>
        <div className="hexagon-container">
          <div className="hexagon-wrapper">
            <div className="hexagon-border"></div>
            <div className="hexagon-image">
              <img src="images/nico_kopp.jpeg" alt="personalimage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
