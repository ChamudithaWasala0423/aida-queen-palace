"use client";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"; // Importing icons from react-icons
import { IoMdCloseCircle } from "react-icons/io";
import { getGallery } from "../../../sanity/sanity.query";
import { Loader } from "../general/loader";
export type GalleryType = {
  type: string;
  imageUrl: string;
};
const GalleryMainPage = () => {
  const [images, setImages] = useState<GalleryType[]>([]);
  // State for handling loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // State for handling errors
  const [error, setError] = useState<string | null>(null);

  // State for managing modal visibility
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // State for storing the selected image
  const [selectedImage, setSelectedImage] = useState<GalleryType | null>(null);
  // State for storing the index of selected image
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // Helper function to load gallery data based on type
  const loadGallery = async (galleryType: string) => {
    setIsLoading(true);
    setError(null);
    try {
      let fetchedImages: GalleryType[] = [];
      switch (galleryType) {
        case "all":
          const taraImages = await getGallery();

          fetchedImages = [...taraImages];
          break;
        default:
          fetchedImages = [];
      }

      setImages(fetchedImages);
      if (fetchedImages.length === 0) {
        setError("No images found for the selected gallery.");
      }
    } catch (err) {
      setError("Failed to fetch images.");
      console.error(err);
    }
    setIsLoading(false);
  };

  // Load all images by default when component mounts
  useEffect(() => {
    loadGallery("all");
  }, []);

  // Function to handle image click
  const handleImageClick = (image: GalleryType, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setModalOpen(true);
  };

  // Function to navigate to the next image
  const nextImage = () => {
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    setSelectedIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  // Close with ESC and navigate with arrow keys when modal is open
  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalOpen]);

  return (
    <div className="w-full flex-col flex items-center justify-center">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap space-x-3">
          <Button
            onClick={() => loadGallery("all")}
            className="hidden  focus:ring-4 focus:outline-none  cursor-pointer"
          >
            All Collection
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 items-stretch">
          {isLoading ? (
            <div className="flex items-center justify-center w-full h-60 sm:h-80 col-span-1 sm:col-span-2 md:col-span-3">
              <Loader loading={isLoading}>Loading</Loader>
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : (
            images.map((image, index) => (
              <button
                key={image.imageUrl}
                type="button"
                aria-label={`Open image ${index + 1}`}
                className="relative bg-white rounded-sm w-full overflow-hidden group aspect-square focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500"
                onClick={() => handleImageClick(image, index)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.type}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover rounded-sm cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </button>
            ))
          )}
        </div>
        {/* Modal for displaying enlarged image */}
        {modalOpen && selectedImage && (
          <div
            className="fixed z-50 inset-0 bg-black/70 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <div className="relative w-full max-w-6xl">
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close preview"
                className="absolute top-0 right-0 m-2 sm:m-4 text-white text-lg z-50 focus:outline-none"
              >
                <IoMdCloseCircle size={30} />
              </button>
              <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] mt-8">
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 z-10"
                >
                  <FaChevronCircleLeft color="white" size={36} />
                </button>
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.type}
                  fill
                  sizes="100vw"
                  className="rounded-lg object-contain"
                  priority
                />
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 z-10"
                >
                  <FaChevronCircleRight color="white" size={36} />
                </button>
              </div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default GalleryMainPage;
