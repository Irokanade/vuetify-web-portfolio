import softEngProject from "@/assets/img/soft-eng-project.png";
import dentalImageProject from "@/assets/img/dental-image-project.png";
import iroChess from "@/assets/img/iro-chess.png";

export const projects = [
  {
    id: "iro-chess",
    title: "Chess Engine with GUI",
    image: iroChess,
    link: "https://github.com/Irokanade/iro-chess-gui",
    description: `This is a chess engine with a graphical user interface (GUI) that allows users to play chess against the engine. The engine uses a minimax algorithm to determine the best move for the player.`,
  },
  {
    id: "software-engineering-course",
    title: "Software Engineering Course",
    image: softEngProject,
    description: `Worked in a team to develop the front-end part of a web application for NTNU's Computer Science courses...`,
  },
  {
    id: "multidimensional-dental-image-segmentation-and-processing",
    title: "Multidimensional Dental Image Segmentation and Processing",
    image: dentalImageProject,
    description: `It is a one-year project about teeth detection and segmentation...`,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    image: "null",
    link: "https://github.com/Irokanade/vuetify-web-portfolio",
    description: `This is the website hope you like it :)`,
  },
];