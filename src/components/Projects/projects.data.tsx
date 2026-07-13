import type { ReactNode } from "react";
import { Gamepad2, Layers, MessagesSquare, type LucideIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";

export type ProjectMedia =
  | { kind: "iframe"; src: string; title: string }
  | {
      kind: "image";
      src: string;
      alt: string;
      title?: string;
      fit?: "cover" | "fill";
      rounded?: boolean;
      overlay?: { src: string; alt: string };
    };

export interface ProjectLink {
  href: string;
  label: string;
  icon?: ReactNode;
}

export interface Project {
  id: string;
  title: string;
  icon: LucideIcon;
  description: ReactNode;
  media: ProjectMedia;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "koppyspeak",
    title: "Koppyspeak",
    icon: MessagesSquare,
    description: (
      <>
        Eine Voice-Chat App, die das beste aus Discord und TeamSpeak vereint und verbessert.
        Mit Koppyspeak können Nutzer in Echtzeit miteinander kommunizieren,
        Sprachkanäle erstellen und anpassen, sowie eine Vielzahl von Funktionen
        nutzen, die die Kommunikation verbessern.
      </>
    ),
    media: {
      kind: "image",
      src: "images/koppyspeak_preview.webp",
      alt: "Koppyspeak Preview",
      title: "Koppyspeak Preview",
    },
    links: [
      {
        href: "https://koppyspeak.kytress.de/",
        label: "Koppyspeak Website",
        icon: <MessagesSquare />,
      },
    ],
  },
  {
    id: "room-shooter",
    title: "Room Shooter",
    icon: Gamepad2,
    description: (
      <>
        Ein klassisches Pico-8 Shooter-Spiel im Retro-Stil. Entwickelt als
        Projekt für das Modul 'Game Design & Development'. Klassische
        Top-Down-Shooter-Mechaniken mit abprallenden Kugeln, zerstörbaren Wänden
        und mehr.
      </>
    ),
    media: {
      kind: "iframe",
      src: "./games/pico-game/index.html",
      title: "Room Shooter Preview",
    },
    links: [
      {
        href: "./games/pico-game/index.html",
        label: "Spielen",
        icon: <Gamepad2 size={20} />,
      },
    ],
  },
  {
    id: "kytress-tcg",
    title: "Kytress TCG",
    icon: Layers,
    description: (
      <>
        Ein Trading Card Game Projekt bei dem es um das Erspielen und Sammeln
        von Karten geht. Dabei werden alle Spiele einzeln als Microservices in
        Spring entwickelt und funktionieren über Websockets direkt Live. Das
        Frontend ist mit Angular umgesetzt. Das Projekt ist aktuell in
        Entwicklung, eine Demo-Version ist aber bereits spielbar. In diesem
        Projekt konnte ich viele neue Erfahrungen sammeln, wie z.B. meine erste
        Hexagonale Architektur für das CardArena Spiel.
      </>
    ),
    media: {
      kind: "image",
      src: "images/kytress_tcg.png",
      alt: "Kytress TCG Preview",
      title: "Kytress TCG Preview",
    },
    links: [{ href: "https://tcg.kytress.de", label: "Website besuchen" }],
  },
  {
    id: "lunania",
    title: "Lunania Minecraft Plugin",
    icon: Layers,
    description: (
      <>
        Ein umfangreiches Minecraft-Plugin für meinen privaten Server Lunania.
        Das Plugin bietet eine MMO-Lebenssimulation mit Features wie
        Grundstücken, Wirtschaftsystem mit Banken, Shops, Jobs, Quests, Missions
        und vielem mehr. Es ist komplett in Java mit der Spigot API entwickelt
        und manipuliert an einigen Stellen den Servercode auch direkt um
        Features wie NPC's zu ermöglichen.
      </>
    ),
    media: {
      kind: "image",
      src: "images/lunania_preview.png",
      alt: "Lunania Server Preview",
      title: "Lunania Minecraft Plugin Preview",
      fit: "cover",
      rounded: true,
      overlay: { src: "images/Lunania.png", alt: "Lunania Logo" },
    },
    links: [
      {
        href: "https://github.com/Koppitent/Lunania",
        label: "GitHub Repository",
        icon: <SiGithub />,
      },
    ],
  },
];
