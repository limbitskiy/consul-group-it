import { useState, useEffect } from "react";
import { projects } from "../data.json";

// preload screenshots
// const preloadSrcList = [ownex1, ownex2, ownex3, ownex4, m31, m32, m33, m34];

const RenderGallery = ({ project }) => {
  const [currentMedia, setCurrentScreenshot] = useState(0);

  // useEffect(() => {
  //   preloadSrcList.forEach((item) => {
  //     const img = new Image();
  //     img.src = item;
  //   });
  // }, []);

  return (
    <div className="prod-images flex flex-col items-center gap-4">
      <div className="image-container w-full lg:mt-20 xl:mt-8">
        {project.media[currentMedia].type === "video" ? (
          <video
            src={`/consul-it/assets/videos/${project.media[currentMedia].name}`}
            className="w-full h-full object-cover hidden lg:block"
            muted
            controls
          ></video>
        ) : (
          <img
            className={`screenshot transition-all w-full h-full object-contain lg:h-72 xl:h-96`}
            // src={project.screenshots[currentMedia]}
            src={`/consul-it/assets/screenshots/${project.media[currentMedia].name}`}
            alt=""
          />
        )}
      </div>

      <ul className="dots flex gap-3 items-center">
        {project.media.map((screenshot, index) => (
          <li
            className={`gallery-dot w-2 h-2 bg-white rounded-sm transition-transform cursor-pointer hover:bg-orange-400 ${
              index === currentMedia ? "active scale-150" : ""
            }`}
            key={screenshot.id}
            onClick={() => setCurrentScreenshot(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

const RenderDesc = ({ project }) => {
  return (
    <div className="prod-desc flex flex-col gap-2 sm:gap-6 md:mb-24 lg:mb-44">
      <div className="prod-title flex items-center gap-4 mt-16 sm:mt-10">
        <h2 className="heading">{project.title}</h2>
      </div>
      <p>{project.desc}</p>
      <p className="text-gray-400">
        Стэк: &nbsp; <span className="text-white">{project.stack}</span>
      </p>
      {project.presentation && (
        <p className="text-gray-400">
          Презентация: &nbsp;{" "}
          <span className="text-white">
            <a
              href={`/consul-it/assets/documents/${project.presentation}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              PDF
            </a>
          </span>
        </p>
      )}
      {project.link && (
        <p className="text-gray-400">
          Подробнее: &nbsp;
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.link}
          </a>
        </p>
      )}
    </div>
  );
};

export default function SingleProject({ name }: { name: string }) {
  const project = projects.find((project) => project.slug == name);

  if (!project) return null;

  return (
    <>
      <div className="split-screen grid gap-x-10 lg:grid-cols-2">
        <div className="flex place-items-center">
          <RenderDesc project={project} />
        </div>
        <div className="hidden lg:block mt-6">
          <RenderGallery project={project} />
        </div>
      </div>
    </>
  );
}
