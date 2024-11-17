"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a motivated and budding{" "}
        <span className="font-medium">full-stack developer</span>with a strong
        foundation in both front-end and back-end technologies. My skills
        include
        <span className="font-medium">
          {" "}
          HTML, CSS, JavaScript, TypeScript,{" "}
        </span>
        <span className="italic">frameworks </span>like{" "}
        <span className="font-medium">React and Next.js,</span> which allow me
        to build <span className="underline">responsive</span> and{" "}
        <span className="underline">dynamic</span> web applications. On the
        backend, I’m comfortable working with{" "}
        <span className="font-medium">Node.js</span> and{" "}
        <span className="font-medium">Express </span>
        to create <span className="underline">efficient</span> and{" "}
        <span className="underline">scalable</span> server-side applications. My
        knowledge of <span className="font-medium">MongoDB</span> enables me to
        manage data effectively, and I also use tools like{" "}
        <span className="font-medium">Git</span> and
        <span className="font-medium"> Tailwind</span> to streamline my workflow
        and enhance my designs.
      </p>

      <p>
        With each project, I’m committed to learning and applying best practices
        in software development. My goal is to create impactful, user-friendly
        applications that solve real-world problems, and I'm always excited to
        learn and integrate new technologies into my skill set.
      </p>
    </motion.section>
  );
}
