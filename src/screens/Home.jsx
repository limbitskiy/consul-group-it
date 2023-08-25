import React from "react";

const gotoProjects = (setNavigation) => {
  setNavigation((items) => {
    const clone = [...items];
    clone.forEach((item, index) => {
      clone[index].active = false;
      if (clone[index].screen === "projects") {
        clone[index].active = true;
      }
    });
    return clone;
  });
};

export default function Home({ setNavigation }) {
  return (
    <div className="flex flex-col gap-4 mb-52">
      <div className="heading flex justify-center lg:justify-start gap-4 mt-64 lg:mt-0 md:gap-8">
        <h1 className="text-4xl font-extrabold whitespace-nowrap sm:text-5xl md:text-7xl">
          Consul Group
        </h1>
        <div>
          <span className="it border-4 border-blue-400 rounded-md px-1 text-blue-400 text-2xl font-extrabold md:text-5xl md:border-8 md:px-2">
            IT
          </span>
        </div>
      </div>
      <h4 className="text-xl max-w-4xl leading-10 lg:text-start text-center sm:text-2xl md:text-3xl">
        Ведущий разработчик инновационного программного обеспечения для
        управления недвижимым имуществом.{" "}
      </h4>
      <button
        className="w-min px-10 py-2 font-medium mt-8 hidden lg:block sm:px-16 sm:py-3 mx-auto lg:mx-0"
        onClick={() => gotoProjects(setNavigation)}
      >
        Проекты
      </button>
      <button
        className="mobile-btn w-min px-10 py-2 font-medium mt-8 sm:px-16 sm:py-3 mx-auto lg:mx-0 lg:hidden"
        onClick={() => gotoProjects(setNavigation)}
      >
        Проекты
      </button>
    </div>
  );
}
