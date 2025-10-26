import React from 'react'
import { useTranslations } from 'next-intl'

const CafeSection = () => {
  const t = useTranslations('CafeSection')
  
  return (
   <>
     <section className="py-20 bg-gradient-to-br from-amber-50/50 to-orange-50/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 lg:h-[500px] bg-cover bg-center rounded-lg order-2 lg:order-1"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dzffjgmyc/image/upload/v1761455458/dji_mimo_20251023_175042_0_1761297184348_photo_yj7fdt.jpg')`,
              }}
            />
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <h2 className=" text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] font-light  text-balance">{t('title')}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('description')}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/60 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-amber-800">{t('features.premiumCoffee.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('features.premiumCoffee.description')}
                  </p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-amber-800">{t('features.pastries.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('features.pastries.description')}
                  </p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-amber-800">{t('features.atmosphere.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('features.atmosphere.description')}
                  </p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-amber-800">{t('features.lightBites.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('features.lightBites.description')}
                  </p>
                </div>
              </div>

              <div className="bg-amber-100/50 p-6 rounded-lg border border-amber-200/50">
                <h4 className="font-semibold mb-3 text-amber-900">{t('highlight.title')}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('highlight.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default CafeSection