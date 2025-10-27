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
import { MdBalcony, MdPool } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { Check } from "lucide-react";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { TbBeach } from "react-icons/tb";

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
"https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607898/8_of9xuk.webp",
"https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607898/9_wrkffq.webp",
"https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607900/7_itmrm2.webp",
"https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607903/4_puuyhe.webp",
"https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607912/1_yqudxj.webp",
"https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607903/5_zfdjcx.webp"
];

// Deluxe Doble Room  
const imagesSix = [
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761551827/dji_mimo_20251023_174704_0_1761297185649_photo_wac4o7.jpg",
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761551803/dji_mimo_20251023_174554_0_1761297186641_photo_d3mcbr.jpg",
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761551811/dji_mimo_20251023_174536_0_1761297186866_photo_1_jdaty4.jpg",
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761551827/dji_mimo_20251023_174720_0_1761297185043_photo_ihwfb1.jpg",
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761551814/dji_mimo_20251023_174544_0_1761297186469_photo_cpetrl.jpg"
];

// Deluxe Triple Room
const imagesSeven = [
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761552916/dji_mimo_20251023_174028_0_1761297190801_photo_1_eiu40d.jpg",
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761552908/dji_mimo_20251023_174048_0_1761297189981_photo_li0xh7.jpg",
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761552915/dji_mimo_20251023_174118_0_1761297189779_photo_aqec6n.jpg",
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761552914/dji_mimo_20251023_174320_0_1761297188110_photo_qj8xs5.jpg",
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761552883/dji_mimo_20251023_174108_0_1761297190428_photo_h7d9qt.jpg",
"https://res.cloudinary.com/dzffjgmyc/image/upload/v1761552897/dji_mimo_20251023_174144_0_1761297189345_photo_h78f6r.jpg"
];

// Deluxe Family Room
const imagesEight = [
      "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761555848/dji_mimo_20251023_173012_0_1761297193252_photo_pl1ul0.jpg",
      "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761555841/dji_mimo_20251023_173026_0_1761297193032_photo_qhthvx.jpg",
      "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761555834/dji_mimo_20251023_173034_0_1761297192630_photo_pqqcvn.jpg",
      "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761555843/dji_mimo_20251023_173044_0_1761297192425_photo_feljot.jpg",
      "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761555841/dji_mimo_20251023_173050_0_1761297192233_photo_ncqgwt.jpg",
      "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761555810/dji_mimo_20251023_173126_0_1761297191387_photo_q5aocw.jpg",
      "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761555803/dji_mimo_20251023_173114_0_1761297191808_photo_kbnx5n.jpg"
];

// Deluxe Quadruple Room
const imagesNine = [
     "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761556684/dji_mimo_20251023_171732_0_1761297196519_photo_ddwsyk.jpg",
     "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761556686/dji_mimo_20251023_171712_0_1761297196961_photo_vfyshd.jpg",
     "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761556686/dji_mimo_20251023_172104_0_1761297195221_photo_smqfbo.jpg",
     "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761556666/dji_mimo_20251023_171622_0_1761297197849_photo_ex3m6c.jpg",
     "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761556678/dji_mimo_20251023_171658_0_1761297196745_photo_x7sugo.jpg",
     "https://res.cloudinary.com/dzffjgmyc/image/upload/v1761556679/dji_mimo_20251023_171830_0_1761297196095_photo_zcoc5f.jpg"
];

const facilities = [
  { icon: TbBeach, label: "facilityBeach" },
  { icon: MdBalcony, label: "facilityBalcony" },
  { icon: TbAirConditioning, label: "facilityAC" },
  { icon: LuBath, label: "facilityBath" },
  { icon: MdPool, label: "facilityPool" },
];

const AccommodationImageGrid = () => {
  const t = useTranslations("AccommodationGrid");

  // Map each displayed room key to its specific description key in messages
  const roomDescriptionKeyMap: Record<string, string> = {
    // Suites
    DeluxeDoubleSuiteRoomOne: "DeluxeSuiteRoom",
    DeluxeDoubleSuiteRoomTwo: "DeluxeDoubleRoom",
    // Superior doubles
    SuperiorDoubleRoomOne: "SuperiorDoubleRoom",
    SuperiorDoubleRoomTwo: "SuperiorDoubleRoom",
    // Superior triple
    SuperiorTripleRoom: "SuperiorTripleRoomDesc",
    // Future room types supported by translations
    DeluxeTripleRoom: "DeluxeTripleRoom",
    DeluxeQuadrupleRoom: "DeluxeQuadrupleRoom",

    DeluxeTripleRoomLang: "DeluxeTripleRoomDescription",
    DeluxeQuadrupleRoomLang: "DeluxeQuadrupleRoomDescription",
    DeluxeRoomFamily:"DeluxeFamilyRoomDescription"
  };

  // Map each displayed room key to its specific size key in messages
  const roomSizeKeyMap: Record<string, string> = {
    DeluxeDoubleSuiteRoomOne: "DeluxeDoubleSuiteRoomOneSize",
    DeluxeDoubleSuiteRoomTwo: "DeluxeDoubleSuiteRoomTwoSize",
    SuperiorDoubleRoomOne: "SuperiorDoubleRoomOneSize",
    SuperiorDoubleRoomTwo: "SuperiorDoubleRoomTwoSize",
    SuperiorTripleRoom: "SuperiorTripleRoomSize",
    DeluxeDoubleRoomLang: "DeluxeDoubleRoomSize",
    DeluxeTripleRoomLang: "DeluxeTripleRoomSize",
    DeluxeRoomFamily: "DeluxeFamilyRoomSize",
    DeluxeQuadrupleRoomLang: "DeluxeQuadrupleRoomSize",
  };

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
                     {(() => {
                      const sizeKey = roomSizeKeyMap[titleKey];
                      const raw = sizeKey ? t(sizeKey) : "";
                      const hasSize = typeof raw === "string" && raw.trim().length > 0;
                      const value = hasSize ? `${raw} ${t("sizeUnit")}` : t("sizeUnknown");
                      return (
                        <p className="text-sm text-gray-800 font-bold">
                          {t("sizeLabel")}: {value}
                        </p>
                      );
                    })()}
                    <div className="mt-2">
                      <p className="text-xs">
                        {/* Prefer specific room description when available; fallback to generic text */}
                        {t(roomDescriptionKeyMap[titleKey] ?? "chaletDescription")}
                      </p>
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
           {AIDARooms("DeluxeDoubleRoomLang", imagesSix)}
            {AIDARooms("DeluxeTripleRoomLang", imagesSeven)}
             {AIDARooms("DeluxeRoomFamily", imagesEight)}
              {AIDARooms("DeluxeQuadrupleRoomLang", imagesNine)}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AccommodationImageGrid;