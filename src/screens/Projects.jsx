import { useState, useRef, useEffect } from "react";
import ownex1 from "../assets/screenshots/ownex1.png";
import ownex2 from "../assets/screenshots/ownex2.png";
import ownex3 from "../assets/screenshots/ownex3.png";
import ownex4 from "../assets/screenshots/ownex4.png";
import m31 from "../assets/screenshots/m3-1.png";
import m32 from "../assets/screenshots/m3-2.png";
import ownexLogo from "../assets/ownex-logo.svg";

// transitions
import { SwitchTransition, CSSTransition } from "react-transition-group";

const preloadSrcList = [ownex1, ownex2, ownex3, ownex4, m31, m32];

// const preloadImages = (src) => new Promise((res) => {
//   const img = new Image()
//   img.onload = () => {
//     res(img)
//   }
//   img.src = src
// })

const RenderDescription = ({ project, switchProject }) => {
  const [link, setLink] = useState("");
  const [arrowHoverOver, setArrowHoverOver] = useState(null);

  useEffect(() => {
    let interval;
    let counter = 0;

    interval = setInterval(() => {
      if (counter < project.link.length) {
        const letter = project.link[counter];
        setLink((prev) => prev + letter);
        counter += 1;
      } else {
        clearInterval(interval);
      }
    }, 30);
  }, []);

  return (
    <div className="prod-desc flex flex-col gap-2 sm:gap-6 md:mb-24 lg:mb-44">
      <div className="prod-title flex items-center gap-4 mt-16 sm:mt-10">
        {project.id === 0 ? (
          <img
            className="w-36 sm:w-52 md:w-auto"
            src={ownexLogo}
            alt="Ownex logo"
          />
        ) : (
          <h3 className="text-4xl font-extrabold sm:text-5xl md:text-7xl">
            {project.title}
          </h3>
        )}
        <div
          className="change-project-arrow hidden lg:flex"
          onClick={switchProject}
          onMouseEnter={() => setArrowHoverOver(true)}
          onMouseLeave={() => setArrowHoverOver(false)}
        >
          <svg
            viewBox="0 0 330 244"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              className={`chevron-1 ${
                arrowHoverOver ? "move-arrow-in" : "move-arrow-out"
              }`}
              d="M21.518 223L122 122L21.518 21"
              stroke="white"
              strokeWidth="42"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={`chevron-2 ${
                arrowHoverOver ? "move-arrow-in" : "move-arrow-out"
              }`}
              d="M153 223L253.482 122L153 21"
              stroke="white"
              strokeWidth="42"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className="change-project-arrow-mobile flex lg:hidden"
          onClick={switchProject}
        >
          <svg
            viewBox="0 0 330 244"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              className={`chevron-1 ${
                arrowHoverOver ? "move-arrow-in" : "move-arrow-out"
              }`}
              d="M21.518 223L122 122L21.518 21"
              stroke="white"
              strokeWidth="42"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={`chevron-2 ${
                arrowHoverOver ? "move-arrow-in" : "move-arrow-out"
              }`}
              d="M153 223L253.482 122L153 21"
              stroke="white"
              strokeWidth="42"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="text-md leading-8 sm:text-2xl md:leading-9 lg:max-w-3xl">
        {project.desc}
      </p>
      <p className="text-gray-400">
        Подробнее: &nbsp; <br />
        <a href={project.link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </p>
    </div>
  );
};

const RenderGallery = ({ project }) => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [lastState, setLastState] = useState({});

  const nodeRef3 = useRef(null);

  useEffect(() => {
    preloadSrcList.forEach((item) => {
      const img = new Image();
      img.src = item;
    });
  }, []);

  const handleFullScreen = (ref) => {
    if (isFullScreen) {
      setIsFullScreen(false);
      ref.current.setAttribute(
        "style",
        `top: ${lastState.y}px; left: ${lastState.x}px; height: ${
          lastState.height
        }px; width: ${lastState.width + 64}px`
      );
      ref.current.classList.remove("absolute");
    } else {
      setIsFullScreen(true);
      ref.current.setAttribute(
        "style",
        `top: ${ref.current.y}px; left: ${ref.current.x}px; height: ${
          ref.current.height
        }px; width: ${ref.current.width + 64}px`
      );

      const w = ref.current.width;
      const h = ref.current.height;
      const x = ref.current.x;
      const y = ref.current.y;

      setLastState((items) => ({
        ...items,
        x,
        y,
        width: w,
        height: h,
      }));

      ref.current.classList.add("absolute");

      ref.current.setAttribute(
        "style",
        `top: 50%; left: 50%; transform: translate(-50%, -50%)`
      );
    }
  };
  return (
    <div className="prod-images flex flex-col items-center gap-4">
      <div className="image-container w-full lg:mt-20 xl:mt-8">
        <SwitchTransition>
          <CSSTransition
            key={currentScreenshot}
            nodeRef={nodeRef3}
            timeout={500}
            classNames="slide-fade"
          >
            <img
              ref={nodeRef3}
              className={`screenshot transition-all w-full h-full object-contain lg:h-72 xl:h-96`}
              src={project.screenshots[currentScreenshot]}
              alt=""
              // onClick={() => handleFullScreen(nodeRef3)}
            />
          </CSSTransition>
        </SwitchTransition>
      </div>

      <ul className="dots flex gap-3 items-center">
        {project.screenshots.map((screenshot, index) => (
          <li
            className={`gallery-dot w-2 h-2 bg-white rounded-sm transition-transform cursor-pointer hover:bg-orange-400 ${
              index === currentScreenshot ? "active scale-150" : ""
            }`}
            key={screenshot}
            onClick={() => setCurrentScreenshot(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Ownex",
      desc: "Современная технологическая платформа с широким набором возможностей и инструментов. Может выступить единой цифровой информационно-сервисной площадкой, которая выполнит функцию налогового мониторинга в отношении налогообложения объектов недвижимого имущества",
      link: "https://ownex.pro/",
      screenshots: [ownex1, ownex2, ownex3, ownex4],
    },
    {
      id: 1,
      title: "M3",
      desc: "M3 - cовременная технологическая платформа с широким набором возможностей и инструментов. Может выступить единой цифровой информационно-сервисной площадкой, которая выполнит функцию налогового мониторинга в отношении налогообложения объектов недвижимого имущества",
      link: "https://m3.pro/",
      screenshots: [m31, m32],
    },
  ];

  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);

  const switchProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  return (
    <>
      <div className="split-screen grid gap-x-10 lg:grid-cols-2">
        <SwitchTransition>
          <CSSTransition
            key={currentProject}
            nodeRef={nodeRef}
            timeout={500}
            classNames="slide-left"
          >
            <div className="flex place-items-center" ref={nodeRef}>
              <RenderDescription
                project={projects[currentProject]}
                switchProject={switchProject}
              />
            </div>
          </CSSTransition>
        </SwitchTransition>

        <SwitchTransition>
          <CSSTransition
            key={currentProject}
            nodeRef={nodeRef2}
            timeout={500}
            classNames="slide-right"
          >
            <div className="hidden lg:block" ref={nodeRef2}>
              <RenderGallery project={projects[currentProject]} />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}

/* TODO
loader for screenshots
arrow bug
*/
