import Heading from "@/components/general/Heading";
import GalleryMainPage from "@/components/sections/gallery-main-page";
import HeroImage from "@/components/sections/hero-image";
import { useTranslations } from "next-intl";

const Page = () => {
  const t2 = useTranslations("GalleryPage");
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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607609/2_snbvej.webp"
        uri="https://booking.aidaqueenpalace.com"
        buttonText={t2("HeroImageButtonText")}
      />

      <GalleryMainPage />
    </>
  );
};

export default Page;
