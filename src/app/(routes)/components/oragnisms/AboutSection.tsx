import images from "@/app/assets/image";
import { CircleDot } from "lucide-react";
import Image from "next/image";

const BlogSection = () => {
    return (
        <section className="w-full max-w-7xl max-h-[70%] h-[500px] px-12 py-8">
            <article className="w-full grid grid-cols-2  max-w-[80%]">
                <div>
                    <h1 className="text-3xl font-semibold">Why Choose Us?</h1>
                    <h2 className="text-xs text-gray-600 mt-4">The Best Solution for Your Brilliant Career: A Platform That Understands Your Needs, Matches You with the Best Opportunities, and Helps You Achieve Success Easily and Quickly!</h2>
                    <div className="mt-8">
                        <div className="flex items-center space-x-2 mb-4">
                            <CircleDot size={20} className="text-[#5E46FE]"/>
                            <h2 className="text-sm text-black">Access Thousands of High-Quality Job Listings</h2>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <CircleDot size={20} className="text-[#5E46FE]"/>
                            <h2 className="text-sm text-black">Experience a Fast, Simple, and Efficient Application Process</h2>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <CircleDot size={20} className="text-[#5E46FE]"/>
                            <h2 className="text-sm text-black">Enjoy Personalized Job Recommendations Tailored to You</h2>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <CircleDot size={20} className="text-[#5E46FE]"/>
                            <h2 className="text-sm text-black">Your Data Security Is Our Top Priority</h2>
                        </div>
                    </div>
                </div>
                <Image src={images.Holding} alt="hold" width={200}/>
            </article>
        </section>
    )
}

export default BlogSection;