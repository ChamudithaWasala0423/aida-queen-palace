import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { ImageSwiper } from "../ui/image-swiper";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiHome6Line } from "react-icons/ri";
import { MdBalcony, MdPool } from "react-icons/md";
import { PiFlowerTulipBold } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { Check } from "lucide-react";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

const images = [
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607680/4_rdw5y5.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607683/2_guv2wy.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607680/5_odesrg.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607677/9_ktyjnj.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607678/6_a9uhr3.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607680/7_zmln0m.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607679/8_mqbdzg.webp"
];
const imagesTwo = [
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607953/5_gojsin.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607954/3_uoykik.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607953/6_k1lhfe.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607953/6_k1lhfe.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607948/2_p0gbre.webp",
   "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607951/1_d53x4o.webp",
];
const imagesThree = [
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607808/5_mrzo75.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607808/4_kf4ram.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607809/2_gfkad2.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607808/3_i86hba.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607809/1_iawsip.webp",
];
const imagesFour = [
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607853/7_qmbec4.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607853/6_qplp6g.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607855/2_bp1pb5.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607856/4_ovh2od.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607854/5_otfjez.webp",
   "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607856/1_oowo0e.webp",
];
const imagesFive = [
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607853/7_qmbec4.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607853/6_qplp6g.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607855/2_bp1pb5.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607856/4_ovh2od.webp",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607854/5_otfjez.webp",
   "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607856/1_oowo0e.webp",
];

const facilities = [
  { icon: RiHome6Line, label: "facilityKitchen" },
  { icon: MdBalcony, label: "facilitySittingArea" },
  { icon: PiFlowerTulipBold, label: "facilityGarden" },
  { icon: TbAirConditioning, label: "facilityAC" },
  { icon: LuBath, label: "facilityBath" },
  { icon: MdPool, label: "facilityPool" },
];

const AccommodationImageGrid = () => {
  const t = useTranslations("AccommodationGrid");

  const renderFacilities = () => (
    <div className="grid grid-cols-4 gap-2">
      {facilities.map(({ icon: Icon, label }, index) => (
        <div key={index} className="flex gap-1 items-center">
          <Icon size={20} />
          <p className="text-xs">{t(label)}</p>
        </div>
      ))}
    </div>
  );

  const renderFacilityList = () => (
    <ul className="mt-1 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
      <div className="grid grid-cols-2 items-center">
        {[
          "facilityCozySittingArea",
          "facilityEquippedKitchen",
          "facilityHotWater",
          "facilityTileFloor",
          "facilityTowels",
          "facilityKaraoke",
          "facilitySocket",
          "facilityClothesRack",
        ].map((facility, index) => (
          <li key={index} className="flex gap-1.5 items-center text-left text-gray-900 text-xs">
            <Check className="h-5 w-5 shrink-0 text-cyan-500" />
            {t(facility)}
          </li>
        ))}
      </div>
    </ul>
  );

  const AIDARooms = (titleKey: string, images: string[]) => (
    <div className="bg-slate-100  p-6 rounded-sm w-full">
      <div className="w-full">
        <ImageSwiper images={images} />
      </div>
      <div className="mt-3">
        <h2 className="text-center font-semibold text-lg">{t(titleKey)}</h2>
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center justify-between gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-slate-100 ring-2 ring-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white"
                >
                  {t("knowMoreButton")}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] mt-14">
                <DialogHeader>
                  <DialogTitle>{t(titleKey)}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 items-center gap-4">
                    {renderFacilities()}
                    <div className="mt-2">
                      <p className="text-xs">{t("chaletDescription")}</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-semibold">{t("facilitiesTitle")}</p>
                      {renderFacilityList()}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Link href="https://booking.aidaqueenpalace.com">
                    <Button className="bg-cyan-500 hover:bg-cyan-600">{t("bookNowButton")}</Button>
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Link href="https://booking.aidaqueenpalace.com">
              <Button className="bg-cyan-500 hover:bg-cyan-600">{t("bookNowButton")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 py-24">
        <div className="grid grid-cols-1 rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none lg:rounded-tr-none xl:rounded-tr-none md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {AIDARooms("DeluxeDoubleSuiteRoomOne", images)}
          {AIDARooms("DeluxeDoubleSuiteRoomTwo", imagesTwo)}
          {AIDARooms("SuperiorDoubleRoomOne", imagesThree)}
          {AIDARooms("SuperiorDoubleRoomTwo", imagesFour)}
          {AIDARooms("SuperiorTripleRoom", imagesFive)}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AccommodationImageGrid;