"use client";
import Link from "next/link";
import {
  FaAirbnb,
  FaFacebookF,
  FaInstagramSquare,
  FaTripadvisor,
} from "react-icons/fa";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { TbBrandBooking } from "react-icons/tb";
import { useState } from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const formActionUrl =
    "https://digitalescapeslk.us9.list-manage.com/subscribe/post?u=5670b29db76c562f712305898&amp;id=d37ac9142b&amp;f_id=001b50e1f0";

  const t = useTranslations("Footer");
  const t2= useTranslations("Navigation");

  return (
    <footer className="relative  border-t py-24 overflow-hidden mt-16">
      <MaxWidthWrapper>
        <div className="col-span-1 flex flex-row items-center justify-between ">
          <div className="mb-4">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758785855/AIDA_QUEEN_PALACE_LOGO_bzsro3.png"
                alt={t("LogoAlt")}
                width={200}
                height={200}
              />
            </Link>
          </div>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white  "
            >
              {t("ContactButton")} <MoveRight className="ml-2" />
            </Button>
          </Link>
        </div>
        <hr className="py-6" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-6">
          {/* Links Section */}
          <div className=" col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div>
              <h4 className="font-bold mb-2">{t("CompanyTitle")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <p className="hover:text-cyan-500">{t("Links.Home")}</p>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <p className="hover:text-cyan-500">
                      {t("Links.AboutUs")}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <p className="hover:text-cyan-500">
                      {t("Links.Gallery")}
                    </p>
                  </Link>
                </li>
                 <li>
                  <Link href="/experience">
                    <p className="hover:text-cyan-500">
                      {t("ExperienceTitle")}
                    </p>
                  </Link>
                </li>
                <li>
                    <Link href="/accommodation">
                      <p className="hover:text-cyan-500">
                        {t("Links.Accommodation")}
                      </p>
                    </Link>
                  </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">{t("CollectionsTitle")}</h4>
              <ul className="space-y-2">
                        <li>
                  <Link href="https://www.aidaayurveda.com">
                    <p className="hover:text-cyan-500">
                      {t("Links.AidaAyurveda")}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.aidahotelbentota.com">
                    <p className="hover:text-cyan-500">
                      {t("Links.AidaHotelBentota")}
                    </p>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">{t("OtherTitle")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog">
                    <p className="hover:text-cyan-500">{t("Links.Blog")}</p>
                  </Link>
                </li>
                   <li>
                  <Link href="/privacy-policy">
                    <p className="hover:text-cyan-500">{t("Links.PrivacyPolicy")}</p>
                  </Link>
                </li>
                   <li>
                  <Link href="/cookie-policy">
                    <p className="hover:text-cyan-500">{t("Links.CookiePolicy")}</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h4 className="font-bold mb-4 font-[family-name:var(--font-artifex-hand-regular)]">
              {t("NewsletterTitle")}
            </h4>
            <form
              action={formActionUrl}
              method="POST"
              onSubmit={() => setStatus("Subscribing...")}
              className="flex space-x-2"
              target="_blank"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder={t("NewsletterPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-2 border rounded-lg focus:outline-none text-sm"
                required
              />
              <Button>{t("Subscribe")}</Button>
            </form>
            {status && <p className="mt-2 text-sm">{status}</p>}
          </div>
        </div>

        {/* Bottom section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-8 px-4 font-[family-name:var(--font-artifex-hand-regular)]">
          <p className="text-sm text-gray-500">
            &copy; {t("BrandName")} {currentYear}, {t("AllRightsReserved")}
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.airbnb.co.uk/rooms/1125727581806598525?source_impression_id=p3_1729319754_P38sb6pjDpjcI0uR">
              <p className="text-gray-500 hover:text-cyan-500">
                <FaAirbnb size={20} />
              </p>
            </Link>
            <Link href="https://www.tripadvisor.com/Hotel_Review-g297895-d648029-Reviews-Aida_Ayurveda_Holistic_Health_Resort-Bentota_Galle_District_Southern_Province.html">
              <p className="text-gray-500 hover:text-cyan-500">
                <FaTripadvisor size={20} />
              </p>
            </Link>
            <Link href="https://www.booking.com/hotel/lk/aida-ayurveda.en-gb.html?aid=356980&label=gog235jc-1FCAsohQFCDWFpZGEtYXl1cnZlZGFICVgDaIUBiAEBmAEJuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKHps24BsACAdICJGIxMjI0NDJkLTZkYTAtNDlmMi04YTBkLTU0MzdhY2I1ZmFjNNgCBeACAQ&sid=1ef2af0253a6cffc308d55ee64bb8d81&dest_id=-2213890;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1729319695;srpvid=ccce2e443d20004b;type=total;ucfs=1&">
              <p className="text-gray-500 hover:text-cyan-500">
                <TbBrandBooking size={20} />
              </p>
            </Link>
            <Link href="https://www.facebook.com/AVINYAAYURVEDA/?_rdr">
              <p className="text-gray-500 hover:text-cyan-500">
                <FaFacebookF size={20} />
              </p>
            </Link>
            <Link href="https://www.instagram.com/avinya.ayurveda.official/">
              <p className="text-gray-500 hover:text-cyan-500">
                <FaInstagramSquare size={20} />
              </p>
            </Link>
          </div>
          <p className="text-sm text-slate-900 mt-2 md:mt-0 lg:mt-0 xl:mt-0">
            {t("ConceptBy")}{" "}
            <Link href="https://www.thedigitalescapes.com" target="_blank">
              <span className="font-bold text-lg">Digital Escapes </span>
            </Link>{" "}
            & {t("DevelopedBy")}{" "}
            <Link href="https://www.stacmac.com">
              <span className="font-bold text-lg">Stacmac</span>
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>
      <div className=" absolute bottom-0 overflow-hidden  w-full flex items-center justify-center   pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758702058/footer_aqp_agji1z.png"
          alt={t("LeafAlt")}
          width={1700}
          height={1000}
          className="w-full h-full opacity-10"
        />
      </div>
    </footer>
  );
};

export default Footer;
