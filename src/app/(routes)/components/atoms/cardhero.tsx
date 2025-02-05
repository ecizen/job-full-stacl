import images from "@/app/assets/image";
import Image from "next/image";

const CardHero = () => {
  return (
    <div className="absolute bottom-2 left-20 max-h-[165px] rounded-2xl max-w-[170px] w-[160px] h-[156px] bg-white overflow-hidden">
      <Image
        src={images.Meet}
        alt="img"
        className="w-full h-full object-cover"
       fill
      />
    </div>
  );
};

export default CardHero;
