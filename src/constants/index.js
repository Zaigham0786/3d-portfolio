import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";
import python from "../assets/icons/python.webp"
import django from "../assets/icons/django.webp"
import cybrom from "../assets/icons/cybrom.webp"
import mysql from "../assets/icons/mysql.png"
export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Framework",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySql",
        type: "Database",
    }
];
import pandoza from "../assets/images/pandoza.png"
export const experiences = [



    {
        title: "Full stack Developer",
        company_name: "Pandoza Solutions",
        icon: pandoza,
        iconBg: "#a2d2ff",
        date: "Sept 2023 - Present",
        points: [
            "Proficiently leading the development of React.js and Django Rest Framework-based full-stack websites and web applications.",
            "Demonstrated expertise in creating multiple CRM systems, catering to organizational needs as well as bespoke solutions for external clients.",
            "Independently conceptualized, designed, and developed CRM solutions without external assistance, showcasing self-reliance and problem-solving abilities.",
            "Accountable for deploying backend systems on VPS servers, ensuring seamless integration and optimal performance.",
            "Proficiently managing backend deployment on cPanel, leveraging technical expertise to maintain server infrastructure efficiently.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Cybrom",
        icon: cybrom,
        iconBg: "#a2d2ff",
        date: "sept 2022 - aug 2023",
        points: [
            "Proficiently learned Python, C, C++, React.js, and JavaScript.",
            "Acquired comprehensive understanding and practical skills in each language through structured coursework.",
            "Successfully executed various projects during the training period, showcasing hands-on expertise.",
            "Projects spanned multiple domains, highlighting versatility and adaptability in problem-solving.",
            "Recognized by the coaching center for exceptional performance and dedication to continuous learning.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Zaigham0786/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/md-zaigham-97b7ba259',
    }
];
import employee from "../assets/icons/employee.png"
import yoga from "../assets/icons/yoga.png"
import charity from "../assets/icons/charity.png"
import politics from "../assets/icons/politics.png"
export const projects = [
    {
        iconUrl: employee,
        theme: 'btn-back-red',
        name: "A Robust CRM Solution",
        description: 'Proudly presenting my bespoke CRM solution, meticulously crafted using ReactJS, Django, and MySQL. This robust system, hosted on a secure VPS server, manages hundreds of concurrent users seamlessly. With an intuitive ReactJS frontend and a resilient Django backend, navigation is smooth and functionalities are advanced. MySQL ensures reliability and scalability. Experience unparalleled efficiency and growth with this streamlined CRM solution, a testament to my expertise in full-stack development.',
        link: 'https://crm.diwise.in/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Diwise UK',
        description: 'I developed this website, a dynamic website utilizing React.js and Django frameworks. The website features a user-friendly blog upload system with robust filtering functionality, enhancing user experience and content accessibility.',
        link: 'https://diwise.uk',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Redux Store',
        description: 'a modern online application with Tailwind CSS for styling, Razor Payment Gateway for safe transactions, and Redux Toolkit for state management integrated. The application guarantees safe payment processing and effective state management, all while offering users a flawless shopping experience.',
        link: 'https://cute-mermaid-b11178.netlify.app/',
    },
    {
        iconUrl: yoga,
        theme: 'btn-back-pink',
        name: 'Habit Tracker',
        description: 'This task manager utilizes the Redux Toolkit for efficient state management. This application enables users to perform CRUD operations to manage tasks seamlessly. By leveraging the Redux Toolkit, the app ensures optimal performance and a smooth user experience.',
        link: 'https://incomparable-axolotl-d7b807.netlify.app/',
    },
    {
        iconUrl: charity,
        theme: 'btn-back-black',
        name: 'Akka Foundation',
        description: 'Introducing Akka Foundation, a dynamic website dedicated to fostering positive change through insightful blog content. Leveraging React.js and Django Rest Framework, this platform offers a seamless blog uploading system. Enhancing accessibility, the website incorporates a language toggle feature driven by state management. Akka Foundation embodies a commitment to impactful storytelling and utilizes cutting-edge technologies to amplify its mission of empowering communities',
        link: 'https://www.akkafoundation.in',
    },
    {
        iconUrl: politics,
        theme: 'btn-back-yellow',
        name: 'Arvind Patil Nilangekar',
        description: 'Arvind Patil Nilangekar political website, developed using React.js and Django Rest Framework, offers an engaging platform showcasing his political journey. With a user-friendly blog upload system and customizable language toggle, visitors can explore insightful narratives and stay updated on his contributions. Dive into the website to discover compelling content that captures the essence of Arvind Patil Nilangekar political legacy.',
        link: 'https://arvindpatilnilangekar.com/',
    }
];