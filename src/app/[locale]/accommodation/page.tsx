import Heading from "@/components/general/Heading";
import AccommodationImageGrid from "@/components/sections/AccommodationImageGrid";
import CenterTitle from "@/components/sections/centerTitle";
import ChooseUs from "@/components/sections/choose-us";
import DiningSection from "@/components/sections/dining-section";
import HeroImage from "@/components/sections/hero-image";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("AccommodationPage");
   const t2 = useTranslations("HomePage");
  return (
    <>
      <Heading
        title={t("HeadingTitle")}
        description={t("HeadingDescription")}
        keywords={t("HeadingKeywords")}
      />
      <HeroImage
        title={t("HeroImageTitle")}
        description={t("HeroImageDescription")}
        imageUrl="/Deluxe Double Suite Room 1/4_rdw5y5.webp"
        uri="/contact"
        buttonText={t("HeroImageButtonText")}
      />
      <AccommodationImageGrid />
      <DiningSection />
      <div className="py-14">
        <CenterTitle
          title={`${t2("ChooseTitle")}`}
          description={`${t2("ChooseDescription")}`}
          buttonUrl="/accommodation"
          buttonText={`${t2("ChooseButtonText")}`}
        />
        <ChooseUs />
      </div>
    </>
  );
};

export default Page;
