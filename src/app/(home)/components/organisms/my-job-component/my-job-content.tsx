"use client";

import React, { useEffect, useState } from "react";
import { Bookmark, Edit, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface sessionUser {
    id: string;
}

const MyJobContentPage: React.FC<sessionUser> = ({ id }) => {
    interface JobPost {
        id: string;
        image?: string;
        jobTitle: string;
        company: string;
        location: string;
        skills: string[];
    }
    
    const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
    const router = useRouter();
    const { data: session } = useSession({ required: true }) as { data: { user: { id: string } } | null };

    const handleEditNav = (id: string) => {
        router.push(`/myjob/update-job/${id}`);
    };

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("/api/jobs", {
                    params: { userId: session?.user?.id },
                });
                setJobPosts(response.data as JobPost[]);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, [session]);

    const handleRemoveItem = async (jobsId: string) => {
        MySwal.fire({
            title: "Apakah Anda yakin?",
            text: "Data pekerjaan ini akan dihapus secara permanen!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, Hapus!",
            cancelButtonText: "Batal",
            customClass: {
                popup: "rounded-xl shadow-lg",
                title: "text-lg font-semibold",
                confirmButton: "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded",
                cancelButton: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
            },
        }).then(async (result: any) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete("/api/jobs", {
                        params: {
                            userId: session?.user?.id,
                            jobsId,
                        },
                    });

                    setJobPosts(jobPosts.filter((item) => item.id !== jobsId));

                    MySwal.fire({
                        title: "Berhasil!",
                        text: "Pekerjaan telah dihapus.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                        customClass: {
                            popup: "rounded-xl shadow-lg",
                            title: "text-lg font-semibold",
                            confirmButton: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
                        },
                    });
                } catch (error) {
                    console.error("Error deleting job:", error);
                    MySwal.fire({
                        title: "Error!",
                        text: "Terjadi kesalahan saat menghapus.",
                        icon: "error",
                        confirmButtonColor: "#d33",
                        confirmButtonText: "OK",
                    });
                }
            }
        });
    };

    return (
        <div className="bg-[#eef2f7]">
            <article className="grid lg:grid-cols-2 grid-cols-1 lg:px-12 px-6 gap-6 py-8">
                {jobPosts.map((data: any) => ( 
                    <div key={data.id} className="p-4 w-full bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-between pb-6">
                            <div className="flex items-center space-x-4">
                                {data.image && (
                                    <Image src={data.image} alt="company" width={32} height={32} />
                                )}
                                <div>
                                    <h3 className="text-md font-semibold">{data.jobTitle}</h3>
                                    <p className="text-xs text-gray-500">{data.company}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button 
                                    onClick={() => handleEditNav(data.id)} 
                                    className="p-1 bg-blue-500 rounded-sm hover:bg-blue-600 transition"
                                >
                                    <Edit size={18} className="text-white"/>
                                </button>
                                <button 
                                    onClick={() => handleRemoveItem(data.id)} 
                                    className="p-1 bg-red-500 rounded-sm hover:bg-red-600 transition"
                                >
                                    <Trash size={18} className="text-white"/>
                                </button>
                                <button>
                                    <Bookmark size={18} className="text-neutral-700"/>
                                </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-xs text-gray-500">{data.location}</p>
                            <p className="text-xs text-gray-500 mt-2">Posted recently</p>
                        </div>
                        <div className="flex gap-2 mt-6 flex-wrap">
                            {Array.isArray(data.skills) && data.skills.map((skill: string, index: number) => (
                                <span key={index} className="text-[10px] text-neutral-700 rounded-full px-2 py-1 border border-neutral-800">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </article>
        </div>
    );
};

export default MyJobContentPage;
