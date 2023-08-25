import React from "react";

export default function Mission() {
  return (
    <div className="flex flex-col gap-5 md:gap-8 md:mb-40">
      <h2 className="text-4xl font-bold sm:text-5xl md:text-7xl">Контакты</h2>
      <div className="grid-three grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-xl font-bold">Телефоны:</h4>
          <ul className="mt-2">
            <li className="text-lg">000-00-00-00</li>
            <li className="text-lg">000-00-00-00</li>
            <li className="text-lg">000-00-00-00</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Мессенджеры:</h4>
          <ul className="mt-2">
            <li className="text-lg">Ватсап</li>
            <li className="text-lg">Телеграм</li>
            <li className="text-lg">Почта</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Адрес:</h4>
          <ul className="mt-2">
            <li className="text-lg">Улица, дом, офис</li>
          </ul>
        </div>
      </div>
      <p className="tetx-lg max-w-3xl leading-9 sm:leading-10 md:mt-12 md:text-xl">
        С{" "}
        <span className="text-blue-400 font-semibold">
          Пн по Пт с 9:00 до 17:00{" "}
        </span>
        наши консультанты всегда рады предоставить вам любую информацию о нашей
        компании и помочь в решении ваших проблем
      </p>
    </div>
  );
}
