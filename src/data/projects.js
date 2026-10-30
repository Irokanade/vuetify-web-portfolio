import softEngProject from "@/assets/img/soft-eng-project.png";
import dentalImageProject from "@/assets/img/dental-image-project.png";
import iroChess from "@/assets/img/iro-chess.png";
import studyLoanCalc from "@/assets/img/study-loan-calculator.png";

// description: one-line summary shown on project cards
// metric: optional headline number shown on project cards
// tags: tech/topic chips shown on project cards
// highlights: bullet points shown on the project detail page
export const projects = [
  {
    id: "mini-order-book",
    metric: "18M msgs/sec · 41 ns p50 latency",
    tags: ["C++20", "Low latency", "Market data"],
    title: "Limit Order Book",
    image: null,
    link: "https://github.com/Irokanade/mini-order-book",
    description: `Header-only C++20 limit order book that replays real NASDAQ market data at 18M messages/sec.`,
    highlights: [
      "Replays NASDAQ add, cancel, execute, and replace messages from LOBSTER sample data (INTC, 10 price levels)",
      "Price levels are intrusive FIFO lists kept in sorted maps, with O(1) cancels through an order-ID hash map",
      "Orders come from a free-list object pool, so the hot path avoids per-order heap allocation",
      "Supports L2 (market-by-price) and L3 (market-by-order) depth queries",
      "Benchmarked on 600K+ messages: 18M msgs/sec throughput, 41 ns p50, 84 ns p99, and 167 ns p99.9 latency",
    ],
  },
  {
    id: "iro-spsc-queue",
    tags: ["C++20", "Lock-free", "Concurrency"],
    title: "Lock-Free SPSC Queue",
    image: null,
    link: "https://github.com/Irokanade/iro-spsc-queue",
    description: `Header-only, lock-free single-producer single-consumer ring buffer in C++20.`,
    highlights: [
      "Lock-free ring buffer synchronized with acquire/release atomics instead of locks",
      "Producer and consumer indices padded onto separate cache lines to avoid false sharing",
      "Each side caches the other side's index, cutting cross-core cache traffic on the fast path",
      "Blocking and non-blocking push/emplace API constrained with C++20 concepts",
    ],
  },
  {
    id: "iro-cache-simulator",
    metric: "64x more L1D misses: column- vs row-major",
    tags: ["C++", "MESI", "Computer architecture"],
    title: "CPU Cache Simulator",
    image: null,
    link: "https://github.com/Irokanade/iro-cache-simulator",
    description: `Cachegrind-inspired, header-only simulator of a 4-core Intel Core i7 cache hierarchy.`,
    highlights: [
      "Simulates L1, L2, and L3 caches across 4 cores, kept coherent with the MESI protocol",
      "Implements write-back policy, pseudo-LRU replacement, and per-level miss counters",
      "Programs are instrumented directly by calling cpu_read and cpu_write in source code",
      "Demo: column-major traversal incurs 64x more L1D misses than row-major (16.8M vs. 262K)",
    ],
  },
  {
    id: "iro-chess",
    tags: ["C", "C++", "Java", "JNI"],
    title: "Chess Engine with GUI",
    image: iroChess,
    link: "https://github.com/Irokanade/iro-chess-gui",
    description: `Bitboard chess engine in C, played through a Java Swing GUI.`,
    highlights: [
      "Engine written in C with alpha-beta search, quiescence search, and a Zobrist-hashed transposition table",
      "Java Swing GUI talks to the engine over the UCI protocol, so any UCI engine (e.g. Stockfish) can be swapped in",
      "Move validation uses a C++ move generator, adapted from Surge and called from Java via JNI",
      "Play as either color or human vs. human, with configurable engine search depth",
    ],
  },
  {
    id: "measure-l1-cache-latency",
    tags: ["C++", "Microbenchmark"],
    title: "Measure L1 Cache Latency",
    image: null,
    link: "https://github.com/Irokanade/measure-l1-cache-latency",
    description: `C++ microbenchmark that measures how long a read from L1 cache takes.`,
    highlights: [
      "Evicts the data out to L2 by touching a ~512 KB buffer, then times the read back into L1",
      "Repeats the measurement 20,000 times, subtracts the eviction cost, and averages the result",
      "Uses a volatile sink so the compiler cannot optimize the reads away",
    ],
  },
  {
    id: "multidimensional-dental-image-segmentation-and-processing",
    tags: ["Python", "YOLO", "SAM"],
    title: "Dental Image Segmentation",
    image: dentalImageProject,
    description: `Senior project (2023–2024): detecting and segmenting teeth in dental images with YOLO and SAM.`,
    highlights: [
      "One-year senior project at National Taiwan Normal University",
      "Detected and segmented teeth in dental images using YOLO and SAM models",
      "Labeled datasets and built preprocessing pipelines together with National Taiwan University dentists",
    ],
  },
  {
    id: "software-engineering-course",
    tags: ["Vue.js", "Element Plus"],
    title: "NTNU Course Application Web App",
    image: softEngProject,
    description: `Team project: front-end for an NTNU course application web app.`,
    highlights: [
      "Built the front-end with Vue.js and Element Plus",
      "Worked in a team alongside a Go and MongoDB backend",
    ],
  },
  {
    id: "portfolio-website",
    tags: ["Vue 3", "Vuetify"],
    title: "Portfolio Website",
    image: null,
    link: "https://github.com/Irokanade/vuetify-web-portfolio",
    description: `This website, built with Vue 3 and Vuetify and deployed on Vercel. Hope you like it :)`,
  },
  {
    id: "study-loan-calculator",
    tags: ["HTML", "JavaScript"],
    title: "Study Loan Calculator",
    image: studyLoanCalc,
    link: "/study-loan-calculator.html",
    description: `Study loan calculator in plain HTML and JavaScript.`,
  },
];
