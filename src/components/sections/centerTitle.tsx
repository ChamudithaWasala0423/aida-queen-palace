import React from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  buttonUrl: string;
  buttonText: string;
};

const CenterTitle = ({ title, description, buttonUrl, buttonText }: Props) => {
  return (
    <section className="py-10 mt-10">
      <div className="container mx-auto px-4">
        <MaxWidthWrapper>
          <div className="text-center flex flex-col items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dzffjgmyc/image/upload/v1761579951/Pngtree_european_royal_pattern_1534756_1_t8py9w_2_jy10x1.png"
              alt="AIDA Royal icon"
              width={200}
              height={200}
              className="mb-6"
            />
            <h2 className=" uppercase font-heading text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] font-light   text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              {description}
            </p>
            <Link href={buttonUrl}>
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700"
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default CenterTitle;
