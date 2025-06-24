import i18n from "../i18n";

function LanguageSwitch({}) {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="mx-auto max-w-7xl pl-6 pr-6 pt-3">
      <div className="flex justify-end">
        <button
          onClick={() => changeLanguage("pt")}
          className="font-display text-lg text-white pr-3"
        >
          PT
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="font-display text-lg text-white pl-3"
        >
          EN
        </button>
      </div>
    </div>
  );
}

export default LanguageSwitch;
