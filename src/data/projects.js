import softEngProject from "@/assets/img/soft-eng-project.png";
import dentalImageProject from "@/assets/img/dental-image-project.png";
import iroChess from "@/assets/img/iro-chess.png";
import studyLoanCalc from "@/assets/img/study-loan-calculator.png";

export const projects = [
  {
    id: "iro-chess",
    title: "Chess Engine with GUI",
    image: iroChess,
    link: "https://github.com/Irokanade/iro-chess-gui",
    description: `This is a chess engine with a graphical user interface (GUI) that allows users to play chess against the engine. The engine uses a minimax algorithm to determine the best move for the player.`,
  },
  {
    id: "iro-cache-simulator",
    title: "CPU Cache Simulator",
    image: null,
    link: "https://github.com/Irokanade/iro-cache-simulator",
    description: `Cachegrind inspired user space header only cpu cache simulator to count cache hits and cache miss of a program. This implementation uses C++23 and uses cpu_read and cpu_write functions directly in source code to count.`,
  },
  {
    id: "measure-l1-cache-latency",
    title: "Measure L1 Cache Latency",
    image: null,
    link: "https://github.com/Irokanade/measure-l1-cache-latency",
    description: `Simple timing test for cold reading into L1 cache by evicting the data all the way to L2 cache then read it again. Repeat the timing 20,000 times and subtract the cache eviction timing then calculate the average time to read the data.`,
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
    image: null,
    link: "https://github.com/Irokanade/vuetify-web-portfolio",
    description: `This is the website hope you like it :)`,
  },
  {
    id: "study-loan-calculator",
    title: "Study Loan Calculator",
    image: studyLoanCalc,
    link: "/study-loan-calculator.html",
    description: `Simple study loan calculator done in static html and javascript.`,
  },
];