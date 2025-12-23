import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Waves,
  TreePalmIcon as PalmTree,
  Turtle,
  Umbrella,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function TravelExperiences() {
  const t = useTranslations("ExperienceSection");
  const tc = useTranslations("ExperienceCategories");
  const experiences = [
    {
      id: 1,
      title: t("experianseTitleOne"),
      description: t("experianseTitleOneDescription"),
      location: t("experianseTitleOneLocation"),
      image: "/experiances/g1_vcyfln.jpg",
      icon: <Waves className="h-5 w-5" />,
      category: tc("relaxation"),
    },
    {
      id: 2,
      title: t("experianseTitleTwo"),
      description: t("experianseTitleTwoDescription"),
      location: t("experianseTitleTwoLocation"),
      image: "/experiances/g2_seo32w.jpg",
      icon: <Umbrella className="h-5 w-5" />,
      category: tc("relaxation"),
    },
    {
      id: 3,
      title: t("experianseTitleThree"),
      description: t("experianseTitleThreeDescription"),
      location: t("experianseTitleThreeLocation"),
      image: "/experiances/g3_was5ic.jpg",
      icon: <PalmTree className="h-5 w-5" />,
      category: tc("wildlife"),
    },
    {
      id: 4,
      title: t("experianseTitleFour"),
      description: t("experianseTitleFourDescription"),
      location: t("experianseTitleFourLocation"),
      image: "/experiances/g4_kkqmww.jpg",
      icon: <Turtle className="h-5 w-5" />,
      category: tc("wildlife"),
    },
    {
      id: 5,
      title: t("experianseTitleFive"),
      description: t("experianseTitleFiveDescription"),
      location: t("experianseTitleFiveLocation"),
      image: "/experiances/g5_xno2e9.jpg",
      icon: <Turtle className="h-5 w-5" />,
      category: tc("adventure"),
    },
    {
      id: 6,
      title: t("experianseTitleSix"),
      description: t("experianseTitleSixDescription"),
      location: t("experianseTitleSixLocation"),
      image: "/experiances/g6_y7lyc3.jpg",
      icon: <Waves className="h-5 w-5" />,
      category: tc("adventure"),
    },
    {
      id: 7,
      title: t("experianseTitleSeven"),
      description: t("experianseTitleSevenDescription"),
      location: t("experianseTitleSevenLocation"),
      image: "/experiances/g7_a1mqqm.jpg",
      icon: <PalmTree className="h-5 w-5" />,
      category: tc("sightseeing"),
    },
    {
      id: 8,
      title: t("experianseTitleEight"),
      description: t("experianseTitleEightDescription"),
      location: t("experianseTitleEightLocation"),
      image: "/experiances/g8_b0lsxe.webp",
      icon: <Turtle className="h-5 w-5" />,
      category: tc("relaxation"),
    },
    {
      id: 9,
      title: t("experianseTitleNine"),
      description: t("experianseTitleNineDescription"),
      location: t("experianseTitleNineLocation"),
      image: "/experiances/g9_xo7tpn.jpg",
      icon: <Waves className="h-5 w-5" />,
      category: tc("relaxation"),
    },
    {
      id: 10,
      title: t("experianseTitleTen"),
      description: t("experianseTitleTenDescription"),
      location: t("experianseTitleTenLocation"),
      image: "/experiances/g10_xtce7j.jpg",
      icon: <Waves className="h-5 w-5" />,
      category: tc("sightseeing"),
    },
    {
      id: 11,
      title: t("experianseTitleEleven"),
      description: t("experianseTitleElevenDescription"),
      location: t("experianseTitleElevenLocation"),
      image: "/experiances/sri-lanka-cinnamon_1_wtx6zj.png",
      icon: <Waves className="h-5 w-5" />,
      category: tc("sightseeing"),
    },
    {
      id: 12,
      title: t("experianseTitleTwelve"),
      description: t("experianseTitleTwelveDescription"),
      location: t("experianseTitleTwelveLocation"),
      image: "/experiances/g11_rsvpgy.jpg",
      icon: <Waves className="h-5 w-5" />,
      category: tc("relaxation"),
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <Tabs defaultValue="grid" className="w-full py-10 mb-20">
        {/* Grid Layout */}
        <TabsContent value="grid" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  width={600}
                  height={400}
                  className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    {exp.icon}
                    <Badge
                      variant="outline"
                      className="text-white border-white"
                    >
                      {exp.category}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
                  <p className="line-clamp-2 text-sm text-gray-200 mb-3">
                    {exp.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
