import { Waves, Coffee, TreePine } from 'lucide-react'
import { MdOutlinePool } from "react-icons/md";
import { GiSeaTurtle } from "react-icons/gi";
import React from 'react'
import { useTranslations } from 'next-intl'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

const ExperianceCard = () => {
  const t = useTranslations('ExperienceCardSection');

  return (
     <section id="experiences" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-cyan-600">
              <CardHeader>
                <Waves className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{t('cards.beachfront.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('cards.beachfront.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-cyan-600">
              <CardHeader>
                 <MdOutlinePool className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{t('cards.pool.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('cards.pool.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-cyan-600">
              <CardHeader>
                <Coffee className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{t('cards.coffee.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('cards.coffee.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-cyan-600">
              <CardHeader>
                <GiSeaTurtle className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{t('cards.turtle.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('cards.turtle.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default ExperianceCard