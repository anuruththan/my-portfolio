"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Portfolio Website",
    description: "Next.js & Tailwind CSS",
    image: {`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/5.png`},
    tag: ["All", "Back-End"],
    gitUrl: "https://github.com/anuruththan/my-portfolio.git",
  },
  {
    id: 2,
    title: "DUO POC Front-End",
    description: "React.js",
    image: {`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/1.png`},
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/anuruththan/duo-2fa-poc-frontend.git",
  },
  {
    id: 3,
    title: "DUO POC Back-End",
    description: "Spring Boot",
    image: {`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/2.png`},
    tag: ["All", "Back-End"],
    gitUrl: "https://github.com/anuruththan/duo-2fa-poc-backend.git",
  },
  {
    id: 4,
    title: "Authentication using auth0",
    description: "Spring Boot",
    image: {`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/3.png`},
    tag: ["All", "Back-End"],
    gitUrl: "https://github.com/anuruththan/Secure_Webapplication_Development.git",
  },
  {
    id: 5,
    title: "Dairy Management System",
    description: "Flask & Random Forest Classifier",
    image: {`${process.env.NEXT_PUBLIC_BASE_PATH}/projects/4.png`},
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/DairyFarmers/dfi-ml-service.git",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Front-End"
            isSelected={tag === "Front-End"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back-End"
          isSelected={tag === "Back-End"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
