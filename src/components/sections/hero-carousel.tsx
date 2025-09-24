"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import BookingBar from "./BookingBar";

interface CarouselItem {
  id: number;
  image: string;
}

export default function HeroCarousel() {
  const t = useTranslations("HeroMain");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselData: CarouselItem[] = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607597/8_b4qyhk.webp",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607609/4_adyshf.webp",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607903/4_puuyhe.webp",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607912/1_yqudxj.webp",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentItem: CarouselItem = carouselData[currentIndex]!;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {carouselData.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <Image
              src={item.image}
              alt="AIDA Queen Palace"
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8 mt-72">
          <BookingBar />
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              disabled={isTransitioning}
            >
              <div
                className={`w-16 h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
              {index === currentIndex && (
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .shimmer {
          position: relative;
          overflow: hidden;
        }

        .shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
}
