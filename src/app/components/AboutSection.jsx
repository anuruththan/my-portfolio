"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Spring Boot</li>
        <li>Fast API</li>
        <li>NextJs</li>
        <li>Power BI</li>
        <li>PostgreSQL</li>
        <li>Java</li>
        <li>Python</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bsc(Hons) in Software Engineering in University of Kelaniya</li>
      </ul>
    ),
  },
];

const   AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="About me" src="./Images/details-imgaes/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            A motivated Software Engineering undergraduate specializing in machine learning, big data, and cloud
            computing. With hands-on experience in data engineering, Apache Spark, and AWS, I have worked
            extensively with DynamoDB, PostgreSQL, and Delta Lake for scalable data processing. My expertise includes
            Python, SQL, and PySpark, enabling efficient data manipulation and analysis. I have also contributed to
            Power BI dashboards for business intelligence insights. Actively seeking a Machine Learning role to
            apply my skills in ML model development, data preprocessing, and distributed computing while continuing
            to explore advancements in deep learning and AI-driven analytics.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
