import { useState, useEffect, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./App.css";
import videoBg from "./assets/building-timelapse2.mp4";
import videoBgSmall from "./assets/building-timelapse-cropped.mp4";
import spinner from "./assets/logo-once.gif";
import logoMobile from "./assets/logo-mobile.svg";

// screens
import Home from "./screens/Home";
import Mission from "./screens/Mission";
import Projects from "./screens/Projects";
import Contacts from "./screens/Contacts";

// icons
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";

const setActiveScreen = (setNavigation, id) => {
  setNavigation((items) => {
    const clone = [...items];
    clone.forEach((item, index) => {
      clone[index].active = false;
      if (clone[index].id === id) {
        clone[index].active = true;
      }
    });
    return clone;
  });
};

const Navigation = ({ navigation, setNavigation, device }) => {
  const icons = {
    home: <AiOutlineHome size={24} />,
    info: <AiOutlineInfoCircle size={24} />,
    briefcase: <BiBriefcase size={24} />,
    question: <AiOutlineQuestionCircle size={24} />,
  };

  if (device === "desktop") {
    return (
      <ul className="navigation flex gap-20 text-gray-400 mx-auto">
        {navigation.map((item) => (
          <li
            className={`nav-item cursor-pointer relative hover:text-white text-lg transition-colors ${
              item.active ? "active" : ""
            }`}
            key={item.id}
            onClick={() => setActiveScreen(setNavigation, item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    );
  } else if (device === "mobile") {
    return (
      <ul className="navigation flex gap-16 justify-center items-center w-full mt-8 sm:gap-20 sm:mx-auto sm:w-auto">
        {navigation.map((item) => {
          return (
            <li
              className={`nav-item-mobile relative text-lg transition-colors ${
                item.active ? "active" : ""
              }`}
              key={item.id}
              onClick={() => setActiveScreen(setNavigation, item.id)}
            >
              {icons[item.icon]}
            </li>
          );
        })}
      </ul>
    );
  }
};

function App() {
  const [navigation, setNavigation] = useState([
    {
      id: 0,
      title: "Главная",
      screen: "home",
      active: true,
      icon: "home",
    },
    {
      id: 1,
      title: "Миссия",
      screen: "mission",
      active: false,
      icon: "info",
    },
    {
      id: 2,
      title: "Проекты",
      screen: "projects",
      active: false,
      icon: "briefcase",
    },
    {
      id: 3,
      title: "Контакты",
      screen: "contacts",
      active: false,
      icon: "question",
    },
  ]);
  const [currentScreen, setCurrentScreen] = useState("home");

  // const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [spinnerShown, setSpinnerShown] = useState(true);
  const [spinnerStarted, setSpinnerStarted] = useState(false);
  const [overlayShown, setOverlayShown] = useState(true);
  const [spinnerAnimationeEnded, setSpinnerAnimationEnded] = useState(false);

  useEffect(() => {
    setCurrentScreen(getCurrentActiveScreen(navigation).screen);
  }, [navigation]);

  useEffect(() => {
    const restartSpinner = () => {
      const src = gif.current.src;
      gif.current.src = null;
      gif.current.src = src;
    };

    if (!videoLoaded && spinnerAnimationeEnded) {
      setSpinnerAnimationEnded(false);
      restartSpinner();
    }

    if (videoLoaded && spinnerAnimationeEnded) {
      setOverlayShown(false);
    }
  }, [videoLoaded, spinnerAnimationeEnded]);

  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);
  const gif = useRef(null);

  const screens = {
    home: <Home setNavigation={setNavigation} />,
    mission: <Mission />,
    projects: <Projects />,
    contacts: <Contacts />,
  };

  return (
    <>
      <div className="screen w-screen relative z-10">
        {/* <div
          className="logo-mobile lg:hidden"
          onClick={() => setActiveScreen(setNavigation, 0)}
        >
          <img
            className="absolute top-5 right-6 z-50 w-5"
            src={logoMobile}
            alt="Logo"
          />
        </div> */}
        <div className="video-container absolute z-0 w-full h-full overflow-hidden">
          <video
            src={videoBg}
            className="w-full h-full object-cover filter-brightness-50 hidden lg:block"
            autoPlay
            loop
            muted
            onLoadedData={() => {
              setVideoLoaded(true);
              // setTimeout(() => {
              // }, 5000);
            }}
          ></video>
          <video
            src={videoBgSmall}
            className="w-full h-full object-cover filter-brightness-50 lg:hidden"
            autoPlay
            loop
            muted
            onLoadedData={() => {
              setVideoLoaded(true);
              // setTimeout(() => {
              // }, 5000);
            }}
          ></video>
        </div>
        <div className="consul-container mx-auto z-10 relative px-4 md:px-0">
          <nav className="header items-center h-24 hidden px-12 lg:flex xl:px-0">
            <div className="logo">
              <a href="https://consul.group" target="_blank" rel="noreferrer">
                {/* <img src={logo} className="logo" alt="Consul logo" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="181"
                  height="47"
                  fill="none"
                >
                  <path
                    className="logo-color"
                    fill="#fff"
                    d="M66.278 18.438H63.79a2.436 2.436 0 0 0-.279-.858c-.14-.254-.32-.47-.54-.648a2.376 2.376 0 0 0-.76-.41 2.912 2.912 0 0 0-.927-.141c-.602 0-1.127.15-1.574.448-.447.296-.793.728-1.04 1.296-.246.564-.369 1.25-.369 2.057 0 .83.123 1.526.37 2.09.25.565.598.991 1.045 1.28.447.287.964.431 1.551.431.33 0 .634-.044.915-.13.284-.088.536-.215.755-.381.22-.17.402-.377.546-.62.148-.242.25-.519.307-.83l2.488.012a4.642 4.642 0 0 1-1.511 2.87 4.84 4.84 0 0 1-1.534.92c-.591.223-1.26.335-2.006.335-1.038 0-1.966-.235-2.784-.704-.814-.47-1.458-1.15-1.932-2.04-.47-.89-.704-1.968-.704-3.233 0-1.27.238-2.349.716-3.239.477-.89 1.125-1.568 1.943-2.034.818-.47 1.739-.705 2.761-.705.675 0 1.3.095 1.875.285.58.189 1.093.465 1.54.83.447.359.81.8 1.091 1.323.284.523.466 1.121.545 1.796Zm5.662 7.733c-.882 0-1.645-.188-2.29-.563a3.849 3.849 0 0 1-1.482-1.58c-.349-.678-.523-1.464-.523-2.357 0-.902.174-1.69.523-2.364a3.804 3.804 0 0 1 1.483-1.58c.644-.378 1.407-.568 2.29-.568.882 0 1.643.19 2.283.568.644.375 1.14.902 1.49 1.58.348.674.522 1.462.522 2.364 0 .893-.174 1.68-.523 2.357a3.838 3.838 0 0 1-1.489 1.58c-.64.375-1.401.563-2.284.563Zm.012-1.875c.401 0 .736-.114 1.005-.341.27-.231.472-.546.608-.944.14-.397.21-.85.21-1.358 0-.507-.07-.96-.21-1.357-.136-.398-.339-.713-.608-.944-.269-.23-.604-.346-1.005-.346-.406 0-.746.115-1.023.346-.273.231-.48.546-.62.944-.136.397-.204.85-.204 1.357 0 .508.068.96.205 1.358.14.398.346.713.619.944.276.227.617.34 1.023.34Zm8.278-3.341V26h-2.42v-8.727h2.306v1.54h.103c.193-.508.517-.91.971-1.205.455-.3 1.006-.449 1.654-.449.606 0 1.134.133 1.585.398.45.265.801.644 1.051 1.136.25.489.375 1.072.375 1.75V26h-2.42v-5.125c.003-.534-.133-.95-.41-1.25-.276-.303-.657-.454-1.142-.454-.325 0-.613.07-.863.21-.246.14-.44.344-.58.613-.136.265-.206.585-.21.96Zm14.794-1.194-2.216.137c-.038-.19-.12-.36-.244-.512a1.298 1.298 0 0 0-.494-.369 1.68 1.68 0 0 0-.722-.142c-.375 0-.691.08-.949.239-.257.155-.386.363-.386.625 0 .208.083.384.25.528.166.144.452.26.858.347l1.58.318c.848.174 1.48.454 1.897.84.417.387.625.895.625 1.524 0 .571-.168 1.073-.506 1.505-.333.432-.791.77-1.375 1.012-.58.238-1.248.358-2.005.358-1.156 0-2.076-.241-2.762-.722a2.812 2.812 0 0 1-1.199-1.977l2.381-.125c.072.352.246.62.523.806.276.182.63.273 1.062.273.425 0 .766-.081 1.023-.244.261-.167.394-.38.398-.642a.668.668 0 0 0-.279-.54c-.181-.144-.462-.254-.84-.33l-1.512-.3c-.852-.171-1.487-.467-1.903-.887-.413-.42-.62-.957-.62-1.608 0-.56.152-1.044.455-1.449.307-.405.737-.718 1.29-.937.556-.22 1.208-.33 1.954-.33 1.102 0 1.97.233 2.602.699.637.466 1.008 1.1 1.114 1.903Zm7.32 2.523v-5.011h2.42V26h-2.324v-1.585h-.091a2.573 2.573 0 0 1-.983 1.233c-.454.31-1.009.466-1.664.466-.584 0-1.097-.133-1.54-.398a2.734 2.734 0 0 1-1.04-1.13c-.246-.49-.371-1.075-.375-1.756v-5.557h2.42v5.125c.004.515.143.922.415 1.221.273.3.639.45 1.097.45.292 0 .564-.067.818-.2.254-.136.458-.337.614-.602.159-.265.237-.593.233-.983Zm6.777-7.92V26H106.7V14.364h2.421Zm13.403 3.761a2.536 2.536 0 0 0-.335-.733 2.074 2.074 0 0 0-.528-.545 2.275 2.275 0 0 0-.705-.347 2.976 2.976 0 0 0-.869-.12c-.595 0-1.118.148-1.569.444-.447.295-.795.725-1.045 1.29-.25.56-.375 1.246-.375 2.056 0 .811.123 1.5.369 2.069.247.568.595 1.002 1.046 1.3.451.296.983.444 1.596.444.557 0 1.033-.099 1.427-.296.397-.2.7-.483.909-.846.212-.364.318-.794.318-1.29l.5.074h-3v-1.852h4.869v1.466c0 1.022-.216 1.901-.648 2.636a4.406 4.406 0 0 1-1.784 1.693c-.757.394-1.625.591-2.602.591-1.091 0-2.049-.24-2.875-.721-.826-.485-1.47-1.173-1.932-2.063-.458-.894-.687-1.954-.687-3.182 0-.943.136-1.784.409-2.523a5.385 5.385 0 0 1 1.159-1.886 5.006 5.006 0 0 1 1.733-1.176 5.613 5.613 0 0 1 2.142-.404c.659 0 1.273.097 1.841.29.568.19 1.072.459 1.511.807.443.349.805.763 1.085 1.245.281.477.461 1.003.54 1.579h-2.5ZM126.935 26v-8.727h2.346v1.523h.091c.159-.542.426-.951.801-1.228.375-.28.807-.42 1.296-.42a3.65 3.65 0 0 1 .761.085v2.148a3.179 3.179 0 0 0-.471-.091 4.25 4.25 0 0 0-.552-.04c-.356 0-.674.078-.954.233a1.712 1.712 0 0 0-.659.636 1.838 1.838 0 0 0-.239.944V26h-2.42Zm10.083.17c-.882 0-1.645-.187-2.289-.562a3.847 3.847 0 0 1-1.483-1.58c-.349-.678-.523-1.464-.523-2.357 0-.902.174-1.69.523-2.364a3.802 3.802 0 0 1 1.483-1.58c.644-.378 1.407-.568 2.289-.568.883 0 1.644.19 2.285.568.643.375 1.14.902 1.488 1.58.349.674.523 1.462.523 2.364 0 .893-.174 1.68-.523 2.357a3.84 3.84 0 0 1-1.488 1.58c-.641.375-1.402.563-2.285.563Zm.012-1.875c.401 0 .737-.113 1.006-.34.268-.231.471-.546.607-.944.141-.397.211-.85.211-1.358 0-.507-.07-.96-.211-1.357-.136-.398-.339-.713-.607-.944-.269-.23-.605-.346-1.006-.346-.405 0-.746.115-1.023.346-.273.231-.479.546-.619.944-.137.397-.205.85-.205 1.357 0 .508.068.96.205 1.358.14.398.346.713.619.944.277.227.618.34 1.023.34Zm11.454-2.01v-5.012h2.421V26h-2.324v-1.585h-.091a2.58 2.58 0 0 1-.983 1.233c-.454.31-1.009.466-1.665.466-.583 0-1.096-.133-1.539-.398a2.729 2.729 0 0 1-1.04-1.13c-.246-.49-.371-1.075-.375-1.756v-5.557h2.42v5.125c.004.515.142.922.415 1.221.273.3.638.45 1.097.45.291 0 .564-.067.818-.2.254-.136.458-.337.613-.602.16-.265.237-.593.233-.983Zm4.357 6.988v-12h2.386v1.466h.108c.106-.235.26-.474.46-.716.205-.247.47-.451.796-.614.329-.167.739-.25 1.227-.25.637 0 1.224.167 1.762.5.537.33.967.828 1.289 1.494.322.663.483 1.495.483 2.495 0 .973-.157 1.795-.471 2.466-.311.666-.735 1.172-1.273 1.517a3.268 3.268 0 0 1-1.796.511c-.469 0-.869-.078-1.198-.233a2.489 2.489 0 0 1-.802-.585 2.986 2.986 0 0 1-.477-.722h-.074v4.67h-2.42Zm2.369-7.637c0 .52.072.972.216 1.358.144.387.352.688.625.904.273.212.604.318.994.318.394 0 .728-.108 1-.324.273-.22.48-.523.62-.909.144-.39.216-.84.216-1.347 0-.503-.07-.947-.211-1.33-.14-.382-.346-.681-.619-.897-.273-.216-.608-.324-1.006-.324-.393 0-.727.104-1 .313-.268.208-.475.503-.619.886-.144.383-.216.833-.216 1.352Zm13.965-7.272V26h-2.461V14.364h2.461Zm1.581 2.028v-2.028h9.556v2.028h-3.562V26h-2.432v-9.608h-3.562ZM38.184 0H.819A.821.821 0 0 0 0 .816v37.006a.814.814 0 0 0 .438.722l18.018 8.19a2.202 2.202 0 0 0 2.096 0l18.017-8.19a.818.818 0 0 0 .43-.718L38.97 23.3H28.665l.028 7.434a.458.458 0 0 1-.272.42l-8.266 3.72a1.338 1.338 0 0 1-1.3 0l-8.115-3.714a.461.461 0 0 1-.269-.418V11.055a.549.549 0 0 1 .553-.55H28.18a.553.553 0 0 1 .552.55v5.607H39V.812A.814.814 0 0 0 38.184 0Z"
                  />
                </svg>
              </a>
            </div>
            <Navigation
              navigation={navigation}
              setNavigation={setNavigation}
              device={"desktop"}
            />
            <div className="logo-placeholder"></div>
          </nav>
          <div className="content flex place-items-center justify-center px-2 sm:px-12 lg:justify-start xl:px-0">
            <SwitchTransition>
              <CSSTransition
                key={currentScreen}
                nodeRef={nodeRef}
                timeout={500}
                classNames="fade"
              >
                <div ref={nodeRef}>{screens[currentScreen]}</div>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="mobile-nav flex items-center h-24 lg:hidden">
            <Navigation
              navigation={navigation}
              setNavigation={setNavigation}
              device={"mobile"}
            />
          </div>
        </div>
      </div>
      <CSSTransition
        in={overlayShown}
        nodeRef={nodeRef2}
        timeout={2000}
        classNames="slowfade"
        unmountOnExit={true}
      >
        <div ref={nodeRef2} className="loader">
          {spinnerShown && (
            <img
              src={spinner}
              alt="Loading..."
              ref={gif}
              onLoad={() => {
                setTimeout(() => {
                  setSpinnerAnimationEnded(true);
                }, 2040);
              }}
            />
          )}
        </div>
      </CSSTransition>
    </>
  );
}

const getCurrentActiveScreen = (navigation) => {
  return navigation.find((item) => item.active);
};

export default App;

/*
TODO
loader for initial video load
*/
