import { useState, useEffect, useRef } from "react";
import { Outlet, Link, NavLink, useLoaderData, Form } from "react-router-dom";
// import { getContacts, createContact } from "../contacts";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import spinner from "../assets/logo-once.gif";
import videoBg from "../assets/building-timelapse2.mp4";
import videoBgSmall from "../assets/building-timelapse-cropped.mp4";
import { routes as navigation } from "../data.json";
import Icon from "../components/icons";

// export async function action() {
//   const contact = await createContact();
//   return { contact };
// }

// export async function loader() {
//   const contacts = await getContacts();
//   return { contacts };
// }

const Navigation = ({ device }) => {
  if (device === "desktop") {
    return (
      <ul className="navigation flex gap-20 text-gray-400 mx-auto">
        {navigation.map((navItem) => (
          <li
            className={`nav-item cursor-pointer relative hover:text-white text-lg transition-colors ${
              navItem.active ? "active" : ""
            }`}
            key={navItem.id}
          >
            <NavLink className="nav-link" to={navItem.route}>
              {navItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  } else if (device === "mobile") {
    return (
      <ul className="navigation flex gap-16 justify-center items-center w-full mt-8 sm:gap-20 sm:mx-auto sm:w-auto">
        {navigation.map((navItem) => {
          return (
            <li
              className={`nav-item-mobile relative text-lg transition-colors ${
                navItem.active ? "active" : ""
              }`}
              key={navItem.id}
            >
              <NavLink className="nav-link" to={navItem.route}>
                <Icon name={navItem.icon} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default function Root() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [spinnerShown, setSpinnerShown] = useState(true);
  const [overlayShown, setOverlayShown] = useState(true);
  const [spinnerAnimationeEnded, setSpinnerAnimationEnded] = useState(false);

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
            }}
          ></video>
        </div>
        <div className="consul-container mx-auto z-10 relative px-4 md:px-0">
          <nav className="header items-center h-24 hidden px-12 lg:flex xl:px-0">
            <div className="logo">
              <a href="https://consul.group" target="_blank" rel="noreferrer">
                <Icon name="consul-logo" />
              </a>
            </div>
            <Navigation device="desktop" />
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
                <Outlet />
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="mobile-nav flex items-center h-24 lg:hidden">
            <Navigation device="mobile" />
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
