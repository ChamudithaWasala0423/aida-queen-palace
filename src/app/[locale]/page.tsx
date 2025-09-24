import Heading from "@/components/general/Heading";
import CenterTitle from "@/components/sections/centerTitle";
import DiningSection from "@/components/sections/dining-section";
import { ExperienceCardsCarousel } from "@/components/sections/experience-carosel";
import HeroCarousel from "@/components/sections/hero-carousel";
import ImageFullGrid from "@/components/sections/ImageFullGrid";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Heading
        title={t("HeadingTitle")}
        description={t("HeadingDescription")}
        keywords={t("HeadingKeywords")}
      />
      <HeroCarousel />
      <ImageFullGrid
        title={t("ImageFullGridTitle")}
        description={t("ImageFullGridDescription")}
        imageUrl={
          "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607614/3_iubqgr.webp"
        }
        buttonText={t("ImageFullGridButtonText")}
      />
      <DiningSection />
      <div className="py-14 bg-slate-100">
        <CenterTitle
          title={`${t("centerTitlethree")}`}
          description={`${t("centerTitleThreeDescription")}`}
          buttonUrl="/experiance"
          buttonText={`${t("centerTitleThreeButtonText")}`}
        />
        <ExperienceCardsCarousel />
      </div>
    </>
  );
}
