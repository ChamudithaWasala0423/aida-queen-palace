import Heading from "@/components/general/Heading";
import CenterTitle from "@/components/sections/centerTitle";
import ChooseUs from "@/components/sections/choose-us";
import DiningSection from "@/components/sections/dining-section";
import ExperianceCard from "@/components/sections/experiance-card";
import { ExperienceCardsCarousel } from "@/components/sections/experience-carosel";
import { GallerySection } from "@/components/sections/gallery-section";
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
      <div className="py-14">
        <CenterTitle
          title={`${t("ChooseTitle")}`}
          description={`${t("ChooseDescription")}`}
          buttonUrl="/accommodation"
          buttonText={`${t("ChooseButtonText")}`}
        />
        <ChooseUs />
      </div>
      <DiningSection />
      <div className="py-14 ">
        <CenterTitle
          title={`${t("centerTitlethree")}`}
          description={`${t("centerTitleThreeDescription")}`}
          buttonUrl="/experiance"
          buttonText={`${t("centerTitleThreeButtonText")}`}
        />
        <ExperianceCard />
        <ExperienceCardsCarousel />
      </div>
      <div className="py-24 bg-slate-100">
        <CenterTitle
          title={`${t("galleryTitle")}`}
          description={t("galleryDescription")}
          buttonUrl="/gallery"
          buttonText={`${t("galleryButtonText")}`}
        />
        <GallerySection />
      </div>
    </>
  );
}
