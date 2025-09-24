import Heading from "@/components/general/Heading";
import AccommodationImageGrid from "@/components/sections/AccommodationImageGrid";
import HeroImage from "@/components/sections/hero-image";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("AccommodationPage");
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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607680/4_rdw5y5.webp"
        uri="/contact"
        buttonText={t("HeroImageButtonText")}
      />
      <AccommodationImageGrid />
    </>
  );
};

export default Page;
