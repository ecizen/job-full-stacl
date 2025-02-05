
import Marquee from "react-fast-marquee";
const Testimonial = () => {
    return (
        <section className="min-h-screen px-12 py-8 bg-[#583efe25]">
            <div className="flex flex-col  justify-center">
                <h1 className="text-3xl font-semibold max-w-[350px]  text-neutral-900 leading-normal">What <span className="text-blue-600">Professionals</span> Say About Us</h1>
                <p className="max-w-lg text-xs mt-3 text-neutral-500 ">Discover how lokersync helps professionals achieve their career goals. Real feedback from real users who trust us to connect them with the best opportunities.</p>
            </div>
            <article className="mt-8">
               <div className="w-[360px] h-[200px] bg-white rounded-md">

               </div>
            </article>
        </section>
    )
}

export default Testimonial;