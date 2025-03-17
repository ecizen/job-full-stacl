'use client'
import Container from '@/app/(routes)/components/atoms/container';
import { useSession } from 'next-auth/react';
import SearcJobCard from '../components/molecules/search-job-card';
import { Filter } from 'lucide-react';
import FilterJobs from '../components/molecules/filter-job';
import { Card } from '@/components/ui/card';
import CardHire from '@/app/(routes)/components/molecules/CardHire';
import { CardHireJob } from '../components/molecules/card-hire';
import InformationJob from '../components/molecules/information-job';
import { useState } from 'react';

interface User {
    id: string; 
    name: string;
    email: string;
   
  }
interface Session {
    user : User;
}

 const Dashboard =()=> {
    const { data: session, status } = useSession() as { data: Session | null; status: string };
     const [layout, setLayout] = useState("grid"); 

  

  return (
    <Container>
      <main className='w-full min-h-screen'>
        <div className='z-0'>
           <SearcJobCard/>
        </div>
        <div className=' lg:px-12 px-0 py-0 w-full min-h-screen flex bg-[#eef2f7] gap-6'>
           <FilterJobs/> 
          <div className='w-full'>
            <InformationJob layout={layout} setLayout={setLayout}/>
            <CardHireJob layout={layout} setLayout={setLayout}/>
          </div>
        </div>
      </main>
    </Container>
  )

}

export default Dashboard;
