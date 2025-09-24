"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607597/8_b4qyhk.webp",
    alt: "Abstract painting with vibrant colors",
    width: 800,
    height: 1200,
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607609/4_adyshf.webp",
    alt: "Landscape photography of mountains",
    width: 600,
    height: 400,
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607680/4_rdw5y5.webp",
    alt: "Portrait photography in black and white",
    width: 500,
    height: 500,
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607677/9_ktyjnj.webp",
    alt: "Modern architecture photography",
    width: 500,
    height: 800,
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607680/7_zmln0m.webp",
    alt: "Macro photography of nature",
    width: 700,
    height: 400,
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607953/6_k1lhfe.webp",
    alt: "Street photography in urban setting",
    width: 400,
    height: 600,
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607954/3_uoykik.webp",
    alt: "Minimalist product photography",
    width: 500,
    height: 500,
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607951/1_d53x4o.webp",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607809/2_gfkad2.webp",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607808/4_kf4ram.webp",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607854/5_otfjez.webp",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607853/7_qmbec4.webp",
    alt: "Wildlife photography in natural habitat",
    width: 800,
    height: 500,
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607903/4_puuyhe.webp",
    alt: "Wildlife photography in natural habitat",
    width: 600,
    height: 400,
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758607910/2_nscxl6.webp",
    alt: "Modern architecture photography",
    width: 500,
    height: 800,
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className=" py-16">
      <MaxWidthWrapper>
      {/* Masonry Gallery Grid */}
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="mb-4 overflow-hidden rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                width={1200}
                height={600}
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full object-cover"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 hover:bg-black/20" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MaxWidthWrapper>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-4 -top-4 rounded-full bg-background p-2 text-foreground shadow-lg"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={cn(
                "max-h-[80vh] rounded-lg object-contain shadow-2xl",
                selectedImage.width > selectedImage.height
                  ? "max-w-[80vw]"
                  : "max-w-[60vw]"
              )}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </MaxWidthWrapper>
        </motion.div>
      )}
      </MaxWidthWrapper>
    </section>
  );
}
