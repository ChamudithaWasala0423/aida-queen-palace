import {useTranslations} from 'next-intl';
import Heading from '@/components/general/Heading';
import HeroImage from '@/components/sections/hero-image';
import ContactSection from '@/components/sections/contact-section';

const  Page = () => {
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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607910/2_nscxl6.webp"
        uri="https://booking.aidaqueenpalace.com"
        buttonText={t2("HeroImageButtonText")}
      />

      <ContactSection  />
     </>
    )
}


export default Page;