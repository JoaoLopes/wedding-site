import { useTranslation } from "react-i18next";
import Heart from "@assets/Heart.svg"

function ThingsToDo() {
  const { t } = useTranslation();

  return (
    <div id="thingstodo" className="w-full max-w-7xl m-auto">
        <div className="text-center mt-[80px] mb-[40px]">
            <span className="font-display text-lg text-grey-900 mb-[20px] block">
                {t("thingsSectionSubTitle")}
            </span>
            <h2 className="font-brasilia text-green-700 text-3xl sm:text-4xl">
                {t("thingsSectionTitle")}
            </h2>
            <span className="separation mr-auto ml-auto mt-[35px] mb-[35px] block">
                <img src={Heart} alt="" className="inline-block" />
            </span>

            <div className="block sm:grid sm:grid-cols-2">
                <div className="bg-[url(@assets/coimbra-university.jpg)] bg-center bg-cover h-[250px] sm:h-full" />
                <div className="text-left p-[40px] bg-gray-100">
                    <span className="font-display block text-2xl mb-[8px]">
                        {t("thingsSectionTitle1")}
                    </span>
                    <span className="font-display block text-base mb-[8px]">
                        {t("thingsSectionDescription1")}
                        <a
                            href="https://www.coimbraportugaltourism.com/"
                            target="_blank"
                            className="text-green-700 underline pl-[5px]"
                        >
                            www.coimbraportugaltourism.com
                        </a>
                    </span>
                </div>
            </div>
            <div className="block sm:grid sm:grid-cols-2">
                <div className="text-left p-[40px] bg-gray-100">
                    <span className="font-display block text-2xl mb-[8px]">
                        {t("thingsSectionTitle2")}
                    </span>
                    <span className="font-display block text-base mb-[8px]">
                        {t("thingsSectionDescription2")}
                        <a
                            href="https://epicuracraftbeerhouse.eatbu.com/?lang=en#"
                            target="_blank"
                            className="text-green-700 underline pl-[5px]"
                        >
                            epicuracraftbeerhouse.eatbu.com
                        </a>
                    </span>
                    <span className="font-display block text-base mb-[8px]">
                        {t("thingsSectionDescription3")}
                        <a
                            href="https://joli.pt/pastel-de-tentugal/"
                            target="_blank"
                            className="text-green-700 underline pl-[5px]"
                        >
                            joli.pt/pastel-de-tentugal/
                        </a>
                    </span>
                </div>
                <div className="bg-[url(@assets/pastel.jpg)] bg-center bg-cover h-[250px] sm:h-full" />
            </div>
        </div>
    </div>
  )
}

export default ThingsToDo