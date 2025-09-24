import Heading from "@/components/general/Heading";
import AboutGrid from "@/components/sections/about-grid";
import CenterTitle from "@/components/sections/centerTitle";
import ExperianceCard from "@/components/sections/experiance-card";
import { ExperienceCardsCarousel } from "@/components/sections/experience-carosel";
import HeroImage from "@/components/sections/hero-image";
import ImageFullGrid from "@/components/sections/ImageFullGrid";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("AboutPage");
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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607597/8_b4qyhk.webp"
        uri="/contact"
        buttonText={t("HeroImageButtonText")}
      />
      <ImageFullGrid
        title={t("AboutResortTitle")}
        description={t("AboutResortDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607609/2_snbvej.webp"
        buttonText={t("AboutResortButtonText")}
      />
      <AboutGrid
        title={t("ChairmanTitle")}
        description={t("ChairmanDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758138399/Frame-382.png_m7rkot.webp"
        imageUrlTwo="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758138399/Frame-403-3.png_bcud8a.webp"
        imageUrlThree="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758138408/Frame-404-3.png_bjbnsv.webp"
        imageUrlFour="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758138410/Frame-38321_ro6abx.png"
        buttonText={t("ChairmanButtonText")}
        buttonUrl="/contact"
      />
       <div className="py-14 ">
        <CenterTitle
          title={`${t2("centerTitlethree")}`}
          description={`${t2("centerTitleThreeDescription")}`}
          buttonUrl="/experiance"
          buttonText={`${t2("centerTitleThreeButtonText")}`}
        />
        <ExperianceCard />
        <ExperienceCardsCarousel />
      </div>
      
    </>
  );
};

export default Page;
