import CardHero from "../atoms/cardhero";
import LogoCard from "../atoms/logo-card";
import LogoCardGojek from "../atoms/logo-gojek";
import LogoCardGoogle from "../atoms/logo-google";
import MarqueBrand from "../atoms/marque_brang";
import LandingSearch from "../molecules/landing-search";

const HeroSection = () => {
    return (
      <section className="w-full lg:px-12 px-8 py-6    from-blue-50 via-white to-pink-50">
         <div className="absolute inset-0 pointer-events-none">
            {/* Left gradient */}
            <div className="absolute top-0 bottom-0 left-0 w-[100px] lg:bg-gradient-to-r lg:from-blue-200/30 from-blue-100/20  to-transparent"></div>
            {/* Right gradient */}
            <div className="absolute top-0 bottom-0 right-0 w-[100px] bg-gradient-to-l lg:from-blue-200/30 from-blue-100/20  to-transparent"></div>
        </div>
        <div className="flex flex-col lg:items-center relative h-[100vh] max-h-[480px]">
        <div className="text-sm flex items-center justify-center space-x-2 text-white font-bold rounded-md bg-[#5E46FE] p-2 max-w-max">#The world's leading job search platform </div>

            <div className="mt-8 z-10">
                <h1 className="lg:text-5xl text-3xl font-semibold lg:text-center text-left mb-2">Find a job and <span className="text-[#5E46FE]">thrive</span></h1>
                <h1 className="lg:text-5xl text-3xl font-semibold lg:text-center text-left mb-2"><span className="text-[#5E46FE]">as an expert</span> in</h1>
                <h1 className="lg:text-5xl text-3xl font-semibold lg:text-center text-left"> your field.</h1>
            </div>
            <div className="z-10">
                <p className="text-sm lg:max-w-sm lg:text-center mt-6 leading-relaxed text-gray-700 font-medium">Find your dream job, refine your skills, and become a recognized expert in the field you love <span className="text-xl">✨</span></p>
            </div>
                <LandingSearch/>
            <div className="z-0 lg:block hidden">
                <LogoCard/>
                <LogoCardGoogle/>
                <LogoCardGojek/>
                <CardHero/>
            </div>
        </div>
      </section>
    )
}

export default HeroSection;