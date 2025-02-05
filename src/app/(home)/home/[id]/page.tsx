'use client'
import { useParams } from "next/navigation";
import { CardHireData } from "@/app/(routes)/components/atoms/constant-data";
import Container from "@/app/(routes)/components/atoms/container";
import SearcNAvigationDetail from "../../components/molecules/navigasi-search-detail";
import RelateJob from "../../components/organisms/relate-job";
import '../../components/style/style.css'
import DetailJob from "../../components/organisms/detail-job";
import CardReviewWorker from "../../components/molecules/reviw-worker";
import React from "react";
const JobDetail = () => {
  const { id } = useParams(); 

  const job = React.useMemo(() => 
    CardHireData.find((item) => item.id === Number(id)), 
  [id]);


  if (!job) {
    return <p className="text-center text-gray-500">Job not found</p>;
  }

  return (
    <Container>
      <section className="grid grid-cols-1 lg:order-none order-2   gap-y-2  lg:grid-cols-5 gap-2 bg-[#eef2f7]">
        
        <article className="lg:col-span-1 custom-scrollbar2  bg-white flex-1 lg:max-h-[564px] lg:h-[564px] lg:overflow-y-auto lg:top-[65px] lg:sticky lg:order-first order-last ">
            <RelateJob/>
        </article>

        <article className=" grid lg:grid-cols-4 lg:col-span-4 bg-transparent w-full gap-x-2 gap-y-2 flex-1 lg:order-2 order-first">
          <div className="lg:col-span-4 bg-transparent p-4  ">
            <SearcNAvigationDetail/> 
          </div>
          <div className="bg-white lg:col-span-3 min-h-screen ">
          <DetailJob id={job.id}
           responsibilities={job.responsibilities} 
           requirdSkills={job.requiredSkills}
           image={job.image} 
           company={job.company} 
           country={job.country} 
           city={job.city} 
           jobPostition={job.jobPosition}  
           jobType={job.jobType}
           description={job.description} 
           requirements={job.requirements}
           schedule={job.schedule}
           minSalary={job.minSalary} 
           maxSalary={job.maxSalary} />

          </div>
          <div className="bg-white col-span-1 min-h-screen lg:px-4 px-6 py-6">
            <h1 className="text-xl font-semibold mb-6">Worker Review</h1>
            <CardReviewWorker/>
          </div>
        </article>
      </section>
    </Container>
  );
};

export default JobDetail;
