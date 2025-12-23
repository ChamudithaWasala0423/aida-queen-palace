import Heading from "@/components/general/Heading";
import TravelExperiences from "@/components/sections/experiance-layout";
import HeroImage from "@/components/sections/hero-image";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("ExperiencePage");
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
        imageUrl="/main/2148593462_mpm4yr.jpg"
        uri="https://booking.aidaqueenpalace.com"
        buttonText={t("HeroImageButtonText")}
      />
      <TravelExperiences />
    </>
  );
};

export default Page;
