import { useTranslation } from "react-i18next";
import Heart from "@assets/Heart.svg"

function Registry() {
  const { t } = useTranslation();

  return (
    <div id="registry" className="w-full max-w-7xl m-auto">
        <div className="text-center mt-[80px] mb-[40px]">
            <span className="font-display text-lg text-grey-900 mb-[20px] block">
                {t("registrySectionSubTitle")}
            </span>
            <h2 className="font-brasilia text-green-700 text-3xl sm:text-4xl">
                {t("registrySectionTitle")}
            </h2>
            <span className="separation mr-auto ml-auto mt-[35px] mb-[35px] block">
                <img src={Heart} alt="" className="inline-block" />
            </span>

            <div className="block sm:grid sm:grid-cols-2">
                <div className="bg-[url(@assets/registry.jpg)] bg-center bg-cover h-[250px] sm:h-full" />
                <div className="text-left p-[40px] bg-gray-100">
                    <span className="font-display block text-xl mb-[8px]">
                    {t("registryDescription")}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registry