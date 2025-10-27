import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  imageUrlTwo: string;
  imageUrlThree: string;
  imageUrlFour: string;
  buttonText: string;
  buttonUrl: string;
};

const AboutGrid = ({
  title,
  description,
  imageUrl,
  imageUrlTwo,
  imageUrlThree,
  imageUrlFour,
  buttonText,
  buttonUrl,
}: Props) => {
  return (
    <>
      <section className="py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 ">
          <div className="flex flex-col  items-center gap-4 sm:gap-6">
            <Image
              src="https://res.cloudinary.com/dzffjgmyc/image/upload/v1761579951/Pngtree_european_royal_pattern_1534756_1_t8py9w_2_jy10x1.png"
              alt="AIDA Royal icon"
              width={200}
              height={200}
            />
            <h2 className=" uppercase order-1  tracking-tight text-center text-balance !leading-tight text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] font-light">
              {title}
            </h2>
            <p className=" order-2 mt-4 text-lg  text-gray-900 text-center lg:w-[80%] xl:w-[80%] md:w-[80%] w-full text-balance">
              {description}
            </p>
            <Link href={buttonUrl} className="order-3">
              <div className="flex items-center justify-center mt-4">
                <Button
                  className="bg-cyan-600 hover:bg-cyan-700"
                  size="lg"
                >
                  {buttonText}
                </Button>
              </div>
            </Link>
          </div>
        </MaxWidthWrapper>
        <div className="w-full h-full bg-slate-100 mt-16 ">
          <Image
            src={imageUrl}
            alt="aida hotel"
            width={1900}
            height={2500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full md:h-[500px] lg:h-[500px] xl:h-[500px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
          <div className="w-full h-full bg-slate-100">
            <Image
              src={imageUrlTwo}
              alt="aida hotel"
              width={1500}
              height={1500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full bg-slate-100">
            <Image
              src={imageUrlThree}
              alt="aida hotel"
              width={1500}
              height={1500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full bg-slate-100">
            <Image
              src={imageUrlFour}
              alt="aida hotel"
              width={1500}
              height={1500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutGrid;
