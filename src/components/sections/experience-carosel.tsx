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
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755665839/g1_vcyfln.jpg",
      title: t("experianseTitleOne"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755665842/g4_kkqmww.jpg",
      title: t("experianseTitleFour"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755665851/g7_a1mqqm.jpg",
      title: t("experianseTitleSeven"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755665842/g9_xo7tpn.jpg",
      title: t("experianseTitleNine"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755665845/g8_b0lsxe.webp",
      title: t("experianseTitleEight"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755665841/g5_xno2e9.jpg",
      title: t("experianseTitleFive"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755665841/g6_y7lyc3.jpg",
      title: t("experianseTitleSix"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755667432/sri-lanka-cinnamon_1_wtx6zj.png",
      title: t("experianseTitleEleven"),
    },
    {
      category: "@AIDAQueenPalace",
      src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1755665842/g10_xtce7j.jpg",
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