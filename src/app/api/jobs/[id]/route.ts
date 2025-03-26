import db from "@/lib/db";
import { getServerSession, Session } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions) as 
      (Session & { user: { id: string } }) | null;

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { id, jobTitle, description, jobType, schedule, company, city, country, responsibilities, skills, requirements, salaryAmount, paymentType } = body;

    if (!id) {
      return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
    }

    const updatedJobPost = await db.jobPost.update({
      where: { id },
      data: {
        jobTitle,
        description,
        jobType,
        schedule,
        company,
        city,
        country,
        responsibilities,
        skills: Array.isArray(skills) ? skills : JSON.parse(skills),
        requirements,
        salaryAmount,
        paymentType,
      },
    });

    return NextResponse.json(updatedJobPost, { status: 200 });
  } catch (error) {
    console.error("Error updating job post:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function GET(req: Request) {

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    

    if (id) {
      const jobPost = await db.jobPost.findUnique({
        where: { id: String(id) },
        include: { user: true },
      });

      if (!jobPost) {
        return NextResponse.json({ error: "Job Not Found" }, { status: 404 });
      }

      return NextResponse.json(jobPost, { status: 200 });
    } else {
    
      const jobPosts = await db.jobPost.findMany({
        include: { user: true },
      });

      return NextResponse.json(jobPosts, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching job posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

