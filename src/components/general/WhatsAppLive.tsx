import Image from "next/image";

const WhatsAppLive = () => {
  return (
    <a
      href="https://wa.link/0aq4ns"
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366]"
    >
      <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping"></div>
      <div className="relative z-20">
        <Image src="/icon/social.png" alt="WhatsApp" width={40} height={40} />
      </div>
    </a>
  );
};

export default WhatsAppLive;
