import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import Ecommerce1 from "@/public/e-commence.png";
import FoodDel from "@/public/food-del.png"
import Portfolio from "@/public/Portfolio.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's in Computer Science, Digital Technology Innovation",
    location: "Kasem Bundit University, Bangkok, Thailand",
    description:
      "Pursuing a bachelor's degree with a focus on digital technology innovation, building foundational skills in software development, digital systems, and technology trends.",
    icon: React.createElement(LuGraduationCap), 
    date: "April 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Website",
    description:
      "A full-stack e-commerce platform where users can browse products, manage their accounts, and make secure payments using Stripe. Features include user authentication with JWT, product management, and a responsive UI built with React and Tailwind.",
    tags: [
      "React",
      "MongoDB",
      "Tailwind",
      "Node.js",
      "Express",
      "JWT",
      "Stripe",
    ],
    imageUrl: Ecommerce1,
  },
  {
    title: "Food Delivery App",
    description:
      "A food delivery platform developed with a robust front-end and back-end integration. It includes user authentication, payment processing with Stripe, real-time order tracking, and a responsive design using React and Tailwind.",
    tags: [
      "React",
      "Tailwind",
      "Stripe",
      "JWT",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    imageUrl: FoodDel,
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website built with Next.js, Framer Motion, Resend, and React.Email for seamless email integration. It supports both dark mode and light mode, offering a modern and dynamic user experience.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Framer-motion",
      "Resend",
      "React.Email",
    ],
    imageUrl: Portfolio,
  },
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Framer Motion",
] as const;
