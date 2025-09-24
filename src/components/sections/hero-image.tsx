import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  uri: string;
  buttonText: string;
};

const HeroImage = ({
  title,
  description,
  imageUrl,
  uri,
  buttonText,
}: Props) => {
  return (
    <section className="relative w-full h-[800px] bg-slate-100">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt="AIDA Ayurveda"
            className=" w-full h-full object-cover"
            width={1400}
            height={800}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
      </div>

      <MaxWidthWrapper>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center mt-20">
          <h1 className=" w-[95%] md:w-[60%] lg:w-[60%] xl:w-[60%] text-center uppercase  text-white text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] font-light">
            {title}
          </h1>
          <p className=" mt-4 text-lg  text-white text-center lg:w-[70%] xl:w-[70%] md:w-[70%] w-full text-balance">
            {description}
          </p>
          <Link href={uri}>
            <Button size="lg" className="bg-slate-50 hover:bg-slate-100 text-slate-900 mt-6">
              {buttonText}
            </Button>
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroImage;
