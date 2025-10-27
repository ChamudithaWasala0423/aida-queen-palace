import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
};

const ImageFullGrid = ({ title, description, imageUrl, buttonText }: Props) => {
  return (
    <>
      <section className="overflow-hidden">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32  mt-24">
          <div className="flex flex-col  items-center gap-4 sm:gap-6 ">
            <Image
              src="https://res.cloudinary.com/dzffjgmyc/image/upload/v1761579951/Pngtree_european_royal_pattern_1534756_1_t8py9w_2_jy10x1.png"
              alt="AIDA Royal icon"
              width={200}
              height={200}
            />
            <h2 className=" uppercase order-1 max-w-7xl  tracking-tight text-center text-balance !leading-tight text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] font-light">
              {title}
            </h2>
            <p className=" order-2 mt-4 text-lg  text-gray-900 text-center lg:w-[70%] xl:w-[70%] md:w-[70%] w-full text-balance">
              {description}
            </p>
            <Link href="https://booking.aidaqueenpalace.com" className="order-3">
              <div className="flex items-center justify-center mt-4">
                <Button className="bg-cyan-600 hover:bg-cyan-700" size="lg">
                  {buttonText}
                </Button>
              </div>
            </Link>
          </div>
        </MaxWidthWrapper>
        <div className="w-full h-[700px] bg-slate-100 mt-16 ">
          <Image
            src={imageUrl}
            alt="aida hotel"
            width={1500}
            height={1500}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default ImageFullGrid;
