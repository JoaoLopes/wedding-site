import { useTranslation } from "react-i18next";

import LanguageSwitch from "./LanguageSwitch";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed w-full z-999 bg-linear-to-t from-gray-50/5 to-gray-950">
      <LanguageSwitch />
      <nav className="mx-auto flex max-w-7xl items-center justify-center pr-6 pl-6 pt-2">
        <ul className="flex flex-row items-center gap-10 text-white">
          <li className="font-display hidden md:block">
            <a href="#timeline">{t("headerMenuItem1")}</a></li>
          <li className="font-display hidden md:block">
            <a href="#about">{t("headerMenuItem2")}</a>
          </li>
          <li className="font-display hidden md:block">
            <a href="#travel">{t("headerMenuItem3")}</a>
          </li>
          <li className="bg-[url(@assets/LOGO.svg)] font-brasilia bg-center bg-cover w-[160px] h-[110px]"></li>
          <li className="font-display hidden md:block">
            <a href="#registry">{t("headerMenuItem4")}</a>
          </li>
          <li className="font-display hidden md:block">
            <a href="#other">{t("headerMenuItem5")}</a>
          </li>
          <li className="font-display hidden md:block">
            <a href="#thingstodo">{t("headerMenuItem6")}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
