export default function Mission() {
  return (
    <div className="flex flex-col mt-12 gap-5 sm:mt-0 md:gap-8 md:mb-40">
      <h2 className="heading">Контакты</h2>
      <div className="flex-three flex flex-wrap gap-4 sm:gap-x-24">
        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="text-lg font-bold sm:text-xl">Телефоны:</h4>
            <ul className="mt-2">
              <li className="text-md sm:text-lg">000-00-00-00</li>
              <li className="text-md sm:text-lg">000-00-00-00</li>
              <li className="text-md sm:text-lg">000-00-00-00</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold sm:text-xl">Мессенджеры:</h4>
            <ul className="mt-2">
              <li className="text-md sm:text-lg">Ватсап</li>
              <li className="text-md sm:text-lg">Телеграм</li>
              <li className="text-md sm:text-lg">Почта</li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold sm:text-xl">Адрес:</h4>
          <ul className="mt-2">
            <li className="text-md sm:text-lg">Улица, дом, офис</li>
          </ul>
        </div>
      </div>
      <p className="max-w-3xl">
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
