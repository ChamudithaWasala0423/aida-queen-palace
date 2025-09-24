import Heading from "@/components/general/Heading";
import HeroCarousel from "@/components/sections/hero-carousel";
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
  </>
  );
}
