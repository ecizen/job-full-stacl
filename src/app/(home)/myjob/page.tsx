'use client'
import { CardHireData } from "@/app/(routes)/components/atoms/constant-data";
import images from "@/app/assets/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import { array } from "zod";
import MyJobContentPage from "../components/organisms/my-job-component/my-job-content";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

 const MyJobPage = () => {


    const router = useRouter()

   
    return ( 
        <div className=" bg-[#eef2f7] min-h-screen">
             <article className="w-full lg:px-4 py-4">   
             <Tabs defaultValue="account" className="w-full">
                <TabsList className="flex justify-center">
                    <TabsTrigger value="account" className="">My jobs</TabsTrigger>
                    <TabsTrigger value="password">Liked jobs</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <MyJobContentPage id=""/>
                </TabsContent>
                <TabsContent value="password">
                    
                </TabsContent>
            </Tabs>
             </article>

        </div>
    )
}

export default MyJobPage;