import gamers_hub_thumb from "../../src/assets/projects/gamers_hub_thumb.png";
import rise_at_seven_thumb from "../../src/assets/projects/rise_at_seven_thumb.png";
import rise_at_seven_cover from "@/assets/projects/rise_at_seven_cover.png";
import gamers_hub_cover from "@/assets/projects/gamers_hub_cover.png";
import pretech_thumb from "../../src/assets/projects/pretech_thumb.png";
import pretech_cover from "../../src/assets/projects/pretech_cover.png";

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
      "A responsive frontend landing page developed for an organization, focusing on modern UI design,responsive layout.",
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
    title: "Pretech Solutions",
    subtitle: "",
    description:
      'A sleek, high-performance landing page built with React, designed to showcase next-generation technology solutions. The project focuses heavily on a "premium tech" aesthetic, utilizing modern UI/UX design languages, fluid layout transitions, and an optimized, mobile-first responsive architecture.',
    features: [
      {
        id: 1,
        desc: "Developed using fully responsive layout systems (CSS Grid and Flexbox), ensuring a seamless, dynamic transition across ultra-wide monitors, standard laptops, tablets, and mobile displays.",
      },
      {
        id: 2,
        desc: "Navigation menus, structural grids, and asset layouts scale down gracefully on smaller viewports, transforming complex multi-column layouts into intuitive, thumb-friendly single-column interfaces.",
      },
    ],
    github: "https://github.com/smbmunna/pretech-site.git",
    live: "https://pretech-site.vercel.app/",
    thumb: pretech_thumb,
    cover: pretech_cover,
  },
];
