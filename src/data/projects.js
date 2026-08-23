import gamers_hub_thumb from '../../src/assets/projects/gamers_hub_thumb.png'
import rise_at_seven_thumb from '../../src/assets/projects/rise_at_seven_thumb.png'
import rise_at_seven_cover from '@/assets/projects/rise_at_seven_cover.png'
import gamers_hub_cover from '@/assets/projects/gamers_hub_cover.png'
import pretech_thumb from '../../src/assets/projects/pretech_thumb.png'; 
import pretech_cover from '../../src/assets/projects/pretech_cover.png'; 

export const projectData = [
    {
        id: 1,
        title: 'Nextgen Gamers Hub',
        subtitle: 'A Fullstack Game Rental Web Application',
        description: 'A full-stack video game rental platform built with Next.js and Express, featuring Prisma ORM, PostgreSQL, and JWT secure authentication.',
        github: 'https://github.com/smbmunna/nextgen-gamershub.git',
        live: 'https://nextgen-gamershub.vercel.app/',
        thumb: gamers_hub_thumb, 
        cover: gamers_hub_cover
    },
    {
        id: 2,
        title: 'Rise at Seven',
        subtitle: '', 
        description: 'A pixel-perfect, premium creative agency frontend platform engineered to capture the bold, high-energy identity of leading digital marketing agencies. The project focuses heavily on advanced motion design, fluid entrance transitions, and an immersive user experience built on modern web animation standards.',
        github: 'https://github.com/smbmunna/rise-at-seven.git',
        live: 'https://rise-at-seven-eta.vercel.app/',
        thumb: rise_at_seven_thumb,
        cover: rise_at_seven_cover
    },
    {
        id: 3,
        title: 'Pretech Solutions',
        subtitle: '', 
        description: 'A sleek, high-performance landing page built with React, designed to showcase next-generation technology solutions. The project focuses heavily on a "premium tech" aesthetic, utilizing modern UI/UX design languages, fluid layout transitions, and an optimized, mobile-first responsive architecture.',
        github: 'https://github.com/smbmunna/pretech-site.git',
        live: 'https://pretech-site.vercel.app/',
        thumb: pretech_thumb, 
        cover: pretech_cover
    },
    
]