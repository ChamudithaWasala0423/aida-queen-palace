import MaxWidthWrapper from "../general/MaxWidthWrapper";
// import BookingBar from "./BookingBar";

type Props = {
  videoUrl: string;
}

const HeroVideo = ({videoUrl}: Props) => {
  return (
    <section className="relative w-full h-96  md:h-[800px] xl:h-[800px] lg:h-[800px] ">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full bg-gray-500">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={videoUrl}
          />
        </div>
        <div className="hidden md:block absolute inset-0 bg-black opacity-10" />
      </div>
      <MaxWidthWrapper>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center  md:mt-64">
         {/* <BookingBar /> */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroVideo;
