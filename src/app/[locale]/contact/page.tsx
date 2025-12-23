import { useTranslations } from "next-intl";
import Heading from "@/components/general/Heading";
import HeroImage from "@/components/sections/hero-image";
import ContactSection from "@/components/sections/contact-section";

const Page = () => {
  const t2 = useTranslations("ContactUsPage");
  return (
    <>
      <Heading
        title={t2("HeadingTitle")}
        description={t2("HeadingDescription")}
        keywords={t2("HeadingKeywords")}
      />
      <HeroImage
        title={t2("HeroImageTitle")}
        description={t2("HeroImageDescription")}
        imageUrl="/gallery/dji_mimo_20251023_160938_0_1761297205056_photo_bfen7h.jpg"
        uri="https://booking.aidaqueenpalace.com"
        buttonText={t2("HeroImageButtonText")}
      />
      <ContactSection />
    </>
  );
};

export default Page;
