"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import UserTableViewApply from "@/app/(home)/components/organisms/apply-user/table-view-apply";
import Container from "@/app/(routes)/components/atoms/container";
import { FilterHeader } from "@/app/(home)/components/organisms/apply-user/filter-header";

// Definisi tipe data
interface User {
  id: string;
  cvUrl?: string;
  user: {
    name: string;
    email: string;
    profile?: { phoneNumber?: string; fullName?: string };
  };
  createdAt: string;
}

const ApplyUserPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const jobPostId = params?.id || searchParams.get("jobPostId");

  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!jobPostId) {
      setError("Invalid jobPostId");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/jobs/apply?jobPostId=${jobPostId}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data.applications || []);
      } catch (err) {
        setError("Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jobPostId]);

  return (
    <Container>
       <article className="px-8 py-4">
          <FilterHeader userData={userData} />
        </article>
        <article className="px-8">
          <UserTableViewApply loading={loading} userData={userData} />
        </article>
    </Container>
  );
};

export default ApplyUserPage;
