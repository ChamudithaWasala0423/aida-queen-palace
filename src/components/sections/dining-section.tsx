import { GiRoyalLove } from "react-icons/gi";
import React from "react";
import { useTranslations } from 'next-intl';
import MaxWidthWrapper from "../general/MaxWidthWrapper";

const DiningSection = () => {
  const t = useTranslations('DiningSection');

  return (
    <section id="dining" className="py-20 bg-slate-100">
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className=" uppercase text-black text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] mb-6 text-balance">
              {t('title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GiRoyalLove className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-xl text-cyan-600">
                    {t('features.freshSeafood.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('features.freshSeafood.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <GiRoyalLove className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-xl text-cyan-600">
                    {t('features.authenticCuisine.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('features.authenticCuisine.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <GiRoyalLove className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1 text-xl text-cyan-600">
                    {t('features.privateBeachDining.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('features.privateBeachDining.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-96 lg:h-[500px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dzffjgmyc/image/upload/v1761560437/dji_mimo_20251023_164704_0_1761297204183_photo_qpwl6m.jpg')`,
            }}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default DiningSection;
