import gamers_hub_thumb from "../../src/assets/projects/gamers_hub_thumb.png";
import rise_at_seven_thumb from "../../src/assets/projects/rise_at_seven_thumb.png";
import rise_at_seven_cover from "@/assets/projects/rise_at_seven_cover.png";
import gamers_hub_cover from "@/assets/projects/gamers_hub_cover.png";
import pretech_thumb from "../../src/assets/projects/pretech_thumb.png";
import pretech_cover from "../../src/assets/projects/pretech_cover.png";
import bytespace_thumb from "../../src/assets/projects/bytespace_thumb.png";
import bytespace_cover from "../../src/assets/projects/bytespace_cover.png";


export const projectData = [
  {
    id: 1,
    title: "Nextgen Gamers Hub",
    subtitle: "A Fullstack Game Rental Web Application",
    description:
      "A full-stack video game rental platform built with Next.js and Express, featuring Prisma ORM, PostgreSQL, and JWT secure authentication.",
    features: [
      {
        id: 1,
        desc: "Next.js (App Router) frontend and a modular Express.js REST API deployed on Railway.",
      },
      {
        id: 2,
        desc: "Implemented robust database management using Prisma ORM with PostgreSQL (NeonDB).",
      },
      {
        id: 3,
        desc: "Engineered secure Server Actions with Zod schema validation to handle data validation.",
      },
      {
        id: 4,
        desc: "JWT authentication with HTTP-only cookie session management to protect sensitive routes.",
      },
      {
        id: 5,
        desc: "Implemented strict TypeScript typing across the full stack to improve maintainability.",
      },
    ],
    github: "https://github.com/smbmunna/nextgen-gamershub.git",
    live: "https://nextgen-gamershub.vercel.app/",
    thumb: gamers_hub_thumb,
    cover: gamers_hub_cover,
  },
  {
    id: 2,
    title: "Rise at Seven",
    subtitle:
      "A full responsive agency frontend landing page.",
    description:
      "A pixel-perfect, premium creative agency frontend platform engineered to capture the bold, high-energy identity of leading digital marketing agencies. The project focuses heavily on advanced motion design, fluid entrance transitions, and an immersive user experience built on modern web animation standards.",
    features: [
      {
        id: 1,
        desc: "Built the responsive interface using React.js and Tailwind CSS.",
      },
      {
        id: 2,
        desc: "Developed reusable UI components and structured page sections for maintainability.",
      },
      {
        id: 3,
        desc: "Optimized the layout for desktop, tablet, and mobile screen sizes.",
      },
    ],
    github: "https://github.com/smbmunna/rise-at-seven.git",
    live: "https://rise-at-seven-eta.vercel.app/",
    thumb: rise_at_seven_thumb,
    cover: rise_at_seven_cover,
  },
  {
    id: 3,
    title: "ByteSpace",
    subtitle: "Learning Platform UI, Figma to Next.js",
    description:
      'A pixel-faithful online learning platform, from landing page to sign-up, built with Next.js, TypeScript and Tailwind CSS from a Figma design.',
    features: [
      {
        id: 1,
        desc: "Figma-to-token design system: I extracted the colors, type scale, spacing and 12-column / 1200px grid straight from the Figma file and defined them once as Tailwind v4 theme tokens. Components use semantic names like bg-brand and type-heading-m instead of hard-coded values, so the whole site stays visually consistent and is easy to re-theme.",
      },
      {
        id: 2,
        desc: "Atomic, type-safe architecture: I built the Next.js App Router project with atoms, molecules, organisms and templates in TypeScript. Reusable pieces such as Button, CourseCard and AuthLayout are shared across the landing page, 404, sign-in and sign-up pages. Typed mock data keeps the UI easy to connect to a real backend later.",
      },
      {
        id: 3,
        desc: "Feature-rich and accessible: The landing page has a hero with layered 3D ornaments, a category-filterable course catalog, a creator CTA, testimonials and a footer. There are also a branded 404 and shared sign-in / sign-up pages with loading and error states. Semantic landmarks, screen-reader labels, visible keyboard focus and optimized WebP images through next/image are built in. I also added responsive layouts, since the design only covered desktop.",
      },
    ],
    github: "https://github.com/smbmunna/bytespace-new.git",
    live: "https://bytespace-new-eosin.vercel.app/",
    thumb: bytespace_thumb,
    cover: bytespace_cover,
  },
];
