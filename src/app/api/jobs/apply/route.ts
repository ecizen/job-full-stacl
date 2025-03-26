import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const jobPostId = searchParams.get("jobPostId");

  console.log("🔍 Received jobPostId:", jobPostId); // ✅ Debug log

  if (!jobPostId) {
    console.log("❌ jobPostId not found in query params");
    return NextResponse.json({ message: "Invalid jobPostId" }, { status: 400 });
  }

  try {
    const applications = await db.jobApplication.findMany({
      where: { jobPostId },
      select: {
        id: true,
        cvUrl: true, 
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            profile: { select: { phoneNumber: true, fullName: true } },
          },
        },
      },
    });
    
    console.log("✅ Applications fetched:", applications);
    return NextResponse.json({ applications }, { status: 200 });
  } catch (error) {
    console.error("❌ Database error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
