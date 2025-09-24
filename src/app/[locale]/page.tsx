import Heading from "@/components/general/Heading";
import DiningSection from "@/components/sections/dining-section";
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
        imageUrl={"https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607614/3_iubqgr.webp"}
        buttonText={t("ImageFullGridButtonText")}
      />
      <DiningSection />
    </>
  );
}
