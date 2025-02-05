import images from "@/app/assets/image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueBrand = () => {
    const logos = [
        { src: images.Mandiri, alt: "Mandiri Logo" },
        { src: images.kailogo, alt: "KAI Logo" },
        { src: images.bumn, alt: "BUMN Logo" },
    ];

    return (
        <div className="w-full lg:mt-0 mt-20 py-12 max-h-[300px] flex flex-col justify-center border-gray-200 border-b">
            <h1 className="text-center text-lg mb-4 text-neutral-800 font-semibold">Trusted by 2000+ Company Worldwide</h1>
            <Marquee pauseOnHover={true} gradient={false}>
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center  w-full lg:py-2 py-4"
                    >
                        {logos.map((logo, index) => (
                            <div
                                key={`${i}-${index}`}
                                className="w-[150px] flex items-center lg:mx-10 mx-6 border-2 border-gray-100 rounded-md  justify-center h-[70px] "
                            >
                                <Image
                                className="max-w-[100px]"
                                    src={logo.src}
                                    alt={logo.alt}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueBrand;
