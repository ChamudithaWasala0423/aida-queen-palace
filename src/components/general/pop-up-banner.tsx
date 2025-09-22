"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface PopupBannerData {
  active: boolean
  switchText: string
  buttonText: string
  uri: string
  imageUrl: string
}

interface PopupBannerProps {
  onClose: () => void
  banner: PopupBannerData | null
}

export default function PopupBanner({ onClose, banner }: PopupBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // fade-in image

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!banner || !banner.active) return null;

  return (
    <div
      className={`fixed inset-0 z-50 p-4 flex items-center justify-center transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div
        className={`relative w-full bg-slate-100 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ${isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"}`}
        style={{ width: "800px", maxWidth: "100%" }}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 text-black hover:bg-black/10"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>

        {/* Banner Image with reserved height and fade-in */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={banner.imageUrl}
            alt="Special Offer"
            width={800}
            height={450}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: imageLoaded ? 1 : 0, display: "block" }}
            onLoad={() => setImageLoaded(true)}
          />
          <div
            className={`absolute inset-0 bg-slate-200 transition-opacity duration-300 ${imageLoaded ? "opacity-0" : "opacity-100"}`}
          />
        </div>

        {/* Book Now Button at the bottom */}
        <div className="flex items-center justify-center p-4">
          <Link href={banner.uri} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              {banner.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
