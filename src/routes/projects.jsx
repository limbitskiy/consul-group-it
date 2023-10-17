// router
import { Link } from "react-router-dom";
import { projects } from "../data.json";

const RenderProject = ({ project }) => {
  return (
    <div className="project-card max-w-xl flex flex-col items-start gap-4">
      <Link to={project.route}>
        <h3 className="sub-heading">{project.title}</h3>
      </Link>
      <p className="max-w-3xl sm:text-base lg:text-xl xl:text-2xl xl:leading-10">
        {project.desc}
      </p>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-5 mt-12 md:mt-0 md:mb-40 w-full">
      <h2 className="heading">Проекты</h2>
      <div className="split-two flex flex-wrap justify-between w-full gap-4 md:mt-4">
        {projects.map((project) => (
          <RenderProject project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
