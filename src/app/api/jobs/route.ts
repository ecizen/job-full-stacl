import { getServerSession, Session } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route"; 
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions) as 
      (Session & { user: { id: string } }) | null;

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json(); // Ambil body request
    const {
      jobTitle,
      description,
      jobType,
      schedule,
      company,
      city,
      country,
      responsibilities,
      skills,
      requirements,
      salaryAmount,
      paymentType,
    } = body;

    const newJobPost = await db.jobPost.create({
      data: {
        userId: session.user.id,
        jobTitle,
        description,
        jobType,
        schedule,
        company,
        city,
        country,
        responsibilities,
        skills: Array.isArray(body.skills) ? body.skills : JSON.parse(body.skills),
        requirements,
        salaryAmount,
        paymentType,
      },
    });

    return NextResponse.json(newJobPost, { status: 201 });
  } catch (error) {
    console.error("Error creating job post:", error);
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

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');
    const jobsId = url.searchParams.get('jobsId');

    if (!userId || !jobsId) {
      return NextResponse.json({ message: 'UserId and CartItemId are required' }, { status: 400 });
    }

    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const job = await db.jobPost.findUnique({
      where: {
        id: jobsId,
      },
    });

    if (!job) {
      return NextResponse.json({ message: 'Cart item not found' }, { status: 404 });
    }

    await db.jobPost.delete({
      where: {
        id: jobsId,
      },
    });

    return NextResponse.json({ message: 'Product removed from cart successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal error' }, { status: 500 });
  }
}