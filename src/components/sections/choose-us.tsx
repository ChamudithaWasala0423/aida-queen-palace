import { MapPin, Bed, Utensils } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

const ChooseUs = () => {
  const t = useTranslations('ChooseUsSection');

  return (
     <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle>{t('cards.location.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('cards.location.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Bed className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle>{t('cards.accommodations.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('cards.accommodations.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Utensils className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle>{t('cards.dining.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('cards.dining.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default ChooseUs