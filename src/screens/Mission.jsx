import React from "react";

export default function Mission() {
  return (
    <div className="flex flex-col gap-5 md:mb-40">
      <h2 className="text-4xl font-bold sm:text-5xl md:text-7xl">Миссия</h2>
      <p className="text-lg font-md max-w-3xl leading-9 sm:leading-10 sm:text-xl md:text-2xl">
        Компания{" "}
        <span className="text-blue-400 font-semibold">Консул Групп-ИТ</span>{" "}
        является ведущим разработчиком инновационного программного обеспечения
        для управления недвижимым имуществом.
      </p>
      <p className="text-lg max-w-3xl leading-9 sm:leading-10 sm:text-xl md:text-2xl">
        Наша миссия - построить эффективные инструменты для современных
        владельцев недвижимости, объединяя множество дисциплин, чтобы обеспечить
        максимальную защиту и оптимальное управление активами наших клиентов.
      </p>
    </div>
  );
}
