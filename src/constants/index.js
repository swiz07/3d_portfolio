import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  java,
  brightnetwork,
  weather,
  analyser,
  foodwebsite,
  threejs,
  linkedin,
  github,
  email
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: linkedin,
    url: "https://www.linkedin.com/in/swizeldemelo/",
  },
  {
    id: 2,
    icon: github,
    url: "https://github.com/swiz07",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "IEUK Technology Internship",
    company_name: "Bright Network",
    icon: brightnetwork,
    iconBg: "#383E56",
    date: "July 2025- August 2025",
    points: [
      "Worked on structured tech challenges improving problem-solving skills.",
      "Collaborated in team-based exercises simulating real industry tasks."
    ],
  },
];


const projects = [
  {
    name: "Resume Analyser",
    description:"This is a web application that analyses PDF resumes using OpenAI, extracts key skills, generates summaries, and provides improvement suggestions.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: analyser,
    source_code_link: "https://github.com/swiz07/Resume-Analyser",
  },
  {
    name: "Weather app",
    description:
      "It is a simple weather application built with HTML, CSS, and JavaScript using the OpenWeather API.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/swiz07/Weather-app",
  },
  {
    name: "Food website",
    description:
      "This website was built using html and css. The website has smooth navigation, responsive Flexbox layouts, custom typography, and scroll-triggered image animations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: foodwebsite,
    source_code_link: "https://github.com/swiz07/food-website",
  },
];

export { services, technologies, experiences, projects };