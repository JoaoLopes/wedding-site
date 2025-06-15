import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Introduction from "./sections/Introduction";
import Timeline from "./sections/Timeline";
import AboutUs from "./sections/AboutUs";
import Travel from "./sections/Travel";
import FAQ from "./sections/FAQ";
import Registry from "./sections/Registry";
import ThingsToDo from "./sections/ThingsToDo";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header />
      <h1 className="sr-only">{t("accessibility.homepageHeader")}</h1>
      <Introduction />
      <Timeline />
      <AboutUs />
      <Travel />
      <Registry />
      <FAQ />
      <ThingsToDo />
    </div>
  );
}

export default App;
