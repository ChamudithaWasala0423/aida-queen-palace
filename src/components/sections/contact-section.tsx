"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

const ContactSection = () => {
  const t = useTranslations("ContactUsForm");
  const tInfo = useTranslations("ContactUsInfo");
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    type TurnstileType = {
      render: (
        id: string,
        options: {
          sitekey: string | undefined;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        }
      ) => void;
      reset?: (id: string) => void;
    };
    const win = window as Window & { turnstile?: TurnstileType };
    if (win.turnstile) {
      win.turnstile.render("#turnstile-widget", {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => setTurnstileToken(null),
      });
      return;
    }
    const scriptId = "cf-turnstile-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.onload = () => {
        const winOnLoad = window as Window & { turnstile?: TurnstileType };
        if (winOnLoad.turnstile) {
          winOnLoad.turnstile.render("#turnstile-widget", {
            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
            callback: (token: string) => setTurnstileToken(token),
            "expired-callback": () => setTurnstileToken(null),
            "error-callback": () => setTurnstileToken(null),
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      toast.error(t("captchaError"));
      return;
    }

    if (form.current) {
      try {
        setSending(true);
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
        const templateId = process.env
          .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLICK_KEY as string;

        if (!publicKey) {
          toast.error(t("publicKeyError"));
          setSending(false);
          return;
        }

        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          publicKey
        );

        if (result.status === 200) {
          router.push("../../thankyou");
          toast.success(t("emailSuccess"));
          form.current?.reset();
          setTurnstileToken(null);
          type TurnstileType = {
            reset: (id: string) => void;
          };
          const win = window as Window & { turnstile?: TurnstileType };
          if (win.turnstile && document.getElementById("turnstile-widget")) {
            win.turnstile.reset("#turnstile-widget");
          }
        } else {
          toast.error(t("emailFail"));
          console.error("EmailJS response:", result);
        }
      } catch (error) {
        toast.error(t("emailError"));
        console.error("Error:", error);
      } finally {
        setSending(false);
      }
    } else {
      toast.error(t("formRefError"));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className=" border-3 border-cyan-50 shadow-none">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-cyan-600 font-semibold mb-2 ">
                  {t("sendUsMessage")}
                </h2>
                <p className="text-muted-foreground">{t("helpText")}</p>
              </div>

              <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <div className="space-y-2">
                  <Label htmlFor="first-name">{t("nameLabel")}</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t("namePlaceholder")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("emailLabel")}</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("phoneLabel")}</Label>
                  <Input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    placeholder={t("phonePlaceholder")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("messageLabel")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("messagePlaceholder")}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <div className="my-4">
                  <div id="turnstile-widget"></div>
                </div>
                <Button
                  type="submit"
                  className=" bg-cyan-600 hover:bg-cyan-700 cursor-pointer w-full"
                  disabled={sending || !turnstileToken}
                >
                  {sending ? t("sending") : t("sendMessage")}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="bg-white border-3 border-cyan-50 shadow-none rounded-lg p-6 md:p-8">
            <h2 className="text-3xl text-cyan-600 font-semibold mb-6">
              {tInfo("hotelInformation")}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-cyan-600  mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {tInfo("addressLabel")}
                  </h3>
                  <address
                    className="not-italic text-muted-foreground"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {tInfo("addressValue")}
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-cyan-600  mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {tInfo("phoneLabel")}
                  </h3>
                  <p className="text-muted-foreground">
                    <Link
                      href={`tel:${tInfo("phoneValue")}`}
                      className="hover:underline"
                    >
                      {tInfo("phoneValue")}
                    </Link>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {tInfo("phoneAvailable")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-cyan-600  mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {tInfo("emailLabel")}
                  </h3>
                  <p className="text-muted-foreground">
                    <Link
                      href={`mailto:${tInfo("emailValue")}`}
                      className="hover:underline"
                    >
                      {tInfo("emailValue")}
                    </Link>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {tInfo("emailResponse")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-3 border-cyan-50 shadow-none rounded-lg overflow-hidden  h-[300px] md:h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.762944070319!2d79.99560777447999!3d6.424496124306999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22e9ea3a853c9%3A0xe3f00dfaa42251bf!2sAida%20Hotel%20Bentota!5e0!3m2!1sen!2slk!4v1729015706004!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hasthri Location Map"
              aria-label="hasthri - Map showing the location of our hotel"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#FCF2EB]  rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            {tInfo("checkinoutTitle")}
          </h3>
          <p className="text-muted-foreground">
            {tInfo("checkin")}
            <br />
            {tInfo("checkout")}
          </p>
        </div>
        <div className="bg-[#FCF2EB]  rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            {tInfo("parkingTitle")}
          </h3>
          <p className="text-muted-foreground">{tInfo("parkingAvailable")}</p>
        </div>
        <div className="bg-[#FCF2EB]  rounded-lg p-6 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            {tInfo("conciergeTitle")}
          </h3>
          <p className="text-muted-foreground">
            {tInfo("conciergeAvailable")}
            <br />
            {tInfo("conciergeLocation")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

