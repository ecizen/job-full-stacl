import images from "@/app/assets/image";
import Image from "next/image";

const LogoCardGoogle = () => {
  return (
    <div className="absolute right-32 top-12 max-h-[165px] rounded-2xl max-w-[170px] w-[160px] h-[156px] bg-white overflow-hidden">
      <Image
        src={images.Meet}
        alt="img"
        className="w-full h-full object-cover"
       fill
      />
    </div>
  );
};

export default LogoCardGoogle;
