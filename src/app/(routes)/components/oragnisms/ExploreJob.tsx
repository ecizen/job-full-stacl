import { ArrowRight } from "lucide-react";
import { CardHireData } from "../atoms/constant-data";
import CardHire from "../molecules/CardHire";
import CategoryFeature from "../molecules/categorie-feature";

const ExploreByCategorie = () => {
    return (
       <section className="min-h-screen lg:p-12 p-6 bg-[#ececfae3] border-b">
            <div className="flex flex-col lg:items-center lg:justify-center">
                <h1 className="text-2xl font-semibold">Feature Job <span className="text-[#5E46FE] underline underline-offset-4 decoration-[#5f46fe77]">Circulars</span></h1>
                <p className="text-gray-400 mt-3 text-xs max-w-lg lg:text-center">Explore the latest opportunities and find the job that fits your passion and skills. Start your journey towards a brighter future today.</p>
            </div>
            <article className="w-full lg:px-0 px-0 lg:py-8 md:py-4 py-0 lg:mt-8">
                <div className="lg:px-0  px-0 flex justify-between items-center">
                    <CategoryFeature/>
                    <button className="  text-xs px-4 h-8  font-semibold rounded-full bg-[#5E46FE] flex items-center space-x-1 text-white">Explore More<ArrowRight size={16}/></button>
                </div>
                <div className="mt-6 w-full grid lg:grid-cols-2 lg:px-0 gap-8 ">
                    {CardHireData.map((item)=> (
                        <CardHire id={item.id} image={item.image} company={item.company} country={item.country} city={item.city} jobPostition={item.jobPosition} typeJob={item.jobType} description={item.description} minSalary={item.minSalary} maxSalary={item.maxSalary} />
                    ))}
                      <div className="lg:hidden mt-0 w-full">
                          <button className="  text-xs px-4 h-8  font-semibold rounded-full bg-[#5E46FE] flex items-center space-x-1 text-white">Explore More<ArrowRight size={16}/></button>
                    </div>
                </div>
            </article>
       </section>
    )
}

export default ExploreByCategorie;