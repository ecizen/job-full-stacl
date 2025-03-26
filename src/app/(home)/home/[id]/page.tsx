'use client'
import { useParams } from "next/navigation";
import { CardHireData } from "@/app/(routes)/components/atoms/constant-data";
import Container from "@/app/(routes)/components/atoms/container";
import SearcNAvigationDetail from "../../components/molecules/navigasi-search-detail";
import RelateJob from "../../components/organisms/relate-job";
import '../../components/style/style.css'
import DetailJob from "../../components/organisms/detail-job";
import CardReviewWorker from "../../components/molecules/reviw-worker";
import * as React from "react";

const JobDetail = () => {
  const params = useParams()

  interface Job {
    id: number;
    jobTitle: string;
    skills: string[];
    responsibilities: string
    image: string;
    company: string;
    country: string;
    city: string;
    jobPosition: string;
    jobType: string;
    description: string;
    requirements: string[];
    schedule: string;
    salaryAmount  : number
  }

  const [job, setJob] = React.useState<Job | null>();

  React.useEffect(() => {
    if (params.id) {
      const fetchJobs = async () => {
        try {
          const response = await fetch(`/api/jobs/${params.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch job");
          }
          const data = await response.json();
          console.log("Fetched data:", data); 
      
          if (Array.isArray(data) && data.length > 0) {
            setJob(data[0]); 
          } else {
            setJob(null); 
          }
        } catch (error) {
          console.error(error);
        }
      };
      
      

      fetchJobs();
    }
  }, [params.id]);


  if (!job) {
    return <p className="text-center text-gray-500">Job not found</p>;
  }

  return (
    <Container>
      <section className="grid grid-cols-1 lg:flex-row lg:flex  gap-2 bg-[#eef2f7] px-4">
        <article className="  w-full lg:max-w-[300px] custom-scrollbar2  lg:max-h-[564px] lg:h-[564px] lg:overflow-y-auto lg:top-[65px] lg:sticky order-last lg:order-first">
          <RelateJob/>
        </article>
        <article className="flex flex-col lg:flex-col w-full gap-2 lg:order-2 order-first">
          <div className="bg-transparent p-4 w-full">
            <SearcNAvigationDetail/>
          </div>
          <div className="  min-h-screen grid lg:grid-cols-3 grid-cols-1 gap-2">
            <DetailJob 
              id={job.id} 
              responsibilities={job.responsibilities} 
              requirdSkills={job.skills} 
              image={job.image} 
              company={job.company} 
              country={job.country} 
              city={job.city} 
              jobPostition={job.jobTitle} 
              jobType={job.jobType} 
              description={job.description} 
              requirements={job.requirements} 
              schedule={job.schedule} 
              salary={job.salaryAmount}
            />
          <div className="bg-white min-h-screen lg:px-4 px-6 py-6 lg:col-span-1">
            <h1 className="text-xl font-semibold mb-6">Worker Review</h1>
            <CardReviewWorker/>
          </div>
          </div>
        </article>
      </section>
    </Container>
  );
};

export default JobDetail;
