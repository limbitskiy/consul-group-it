import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

// assets
import ownex1 from "../assets/screenshots/ownex1.png";
import ownex2 from "../assets/screenshots/ownex2.png";
import ownex3 from "../assets/screenshots/ownex3.png";
import ownex4 from "../assets/screenshots/ownex4.png";
import m31 from "../assets/screenshots/m3-1.png";
import m32 from "../assets/screenshots/m3-2.png";
import m33 from "../assets/screenshots/m3-3.png";
import m34 from "../assets/screenshots/m3-4.png";
import ownexLogo from "../assets/ownex-logo.svg";

// transitions
import { SwitchTransition, CSSTransition } from "react-transition-group";

const RenderProject = ({ project }) => {
  return (
    <div className="project-card max-w-xl flex flex-col items-start gap-4">
      <a href="#">
        <h3 className="text-3xl font-extrabold sm:text-4xl md:text-6xl">
          {project.title}
        </h3>
      </a>
      {/* <img className="h-52 object-contain" src={project.screenshots[0]} /> */}
      <p className="text-md max-w-3xl leading-6 md:leading-8 md:text-md lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10">
        {project.desc}
      </p>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      id: 0,
      title: "Ownex",
      desc: "Современная технологическая платформа с широким набором возможностей и инструментов. Может выступить единой цифровой информационно-сервисной площадкой, которая выполнит функцию налогового мониторинга в отношении налогообложения объектов недвижимого имущества",
      shortDesc:
        "Современная технологическая платформа с широким набором возможностей и инструментов.",
      link: "https://ownex.pro/",
      screenshots: [ownex1, ownex2, ownex3, ownex4],
    },
    {
      id: 1,
      title: "M3",
      desc: "M3 - cовременная технологическая платформа с широким набором возможностей и инструментов. Может выступить единой цифровой информационно-сервисной площадкой, которая выполнит функцию налогового мониторинга в отношении налогообложения объектов недвижимого имущества",
      shortDesc:
        "M3 - cовременная технологическая платформа с широким набором возможностей и инструментов.",
      // link: "https://m3.pro/",
      screenshots: [m31, m32, m33, m34],
    },
  ];

  return (
    <div className="flex flex-col gap-5 mt-12 md:mt-0 md:mb-40 w-full">
      <h2 className="text-4xl font-bold sm:text-5xl md:text-7xl">Проекты</h2>
      <div className="split-two flex flex-wrap justify-between w-full gap-4 md:mt-4">
        {projects.map((project) => (
          <RenderProject project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
