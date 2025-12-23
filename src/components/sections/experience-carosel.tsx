"use client";
import React from "react";
import { Card } from "../ui/inster-apple-cards-carousel";
import { Carousel } from "../ui/apple-cards-carousel";
import { useTranslations } from "next-intl";

export function ExperienceCardsCarousel() {
  const t = useTranslations("ExperienceSection");
  const data = [
    {
      category: "@AIDAQueenPalace",
      src: "/experiance/g1_vcyfln.webp",
      title: t("experianseTitleOne"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "/experiance/g4_kkqmww.webp",
      title: t("experianseTitleFour"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "/experiance/g7_a1mqqm.webp",
      title: t("experianseTitleSeven"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "/experiance/g9_xo7tpn.webp",
      title: t("experianseTitleNine"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "/experiance/g8_b0lsxe.webp",
      title: t("experianseTitleEight"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "/experiance/g5_xno2e9.webp",
      title: t("experianseTitleFive"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "/experiance/g6_y7lyc3.webp",
      title: t("experianseTitleSix"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "/experiance/sri-lanka-cinnamon_1_wtx6zj.png",
      title: t("experianseTitleEleven"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "/experiance/g10_xtce7j.webp",
      title: t("experianseTitleTen"),
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full -mt-16">
      <Carousel items={cards} />
    </div>
  );
}