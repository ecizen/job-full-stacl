import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import cloudinary from "cloudinary";
import db from "@/lib/db";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const fullName = formData.get("fullName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const linkedIn = formData.get("linkedIn") as string;
    const portfolio = formData.get("portfolio") as string;
    const bio = formData.get("bio") as string;
    const location = formData.get("location") as string;
    const skills = formData.get("skills") as string; // Expect JSON stringified array
    const experience = formData.get("experience") as string;
    const education = formData.get("education") as string;
    const file = formData.get("avatar") as File | null;

    const user = await db.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    let avatarUrl = null;
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64File = `data:${file.type};base64,${buffer.toString("base64")}`;

      const uploadResponse = await cloudinary.v2.uploader.upload(base64File, {
        folder: "profile_avatars",
        resource_type: "image",
      });

      avatarUrl = uploadResponse.secure_url;
    }

    const updatedProfile = await db.profile.upsert({
      where: { userId: user.id },
      update: {
        fullName,
        phoneNumber,
        linkedIn,
        portfolio,
        bio,
        location,
        skills: skills ? JSON.parse(skills) : [],
        experience,
        education,
        avatarUrl: avatarUrl || undefined,
      },
      create: {
        userId: user.id,
        fullName,
        phoneNumber,
        linkedIn,
        portfolio,
        bio,
        location,
        skills: skills ? JSON.parse(skills) : [],
        experience,
        education,
        avatarUrl,
      },
    });

    return NextResponse.json({ message: "Profile updated successfully", profile: updatedProfile });
  } catch (error) {
    console.error("Profile Update Error:", error);
    return NextResponse.json({ message: "Error updating profile" }, { status: 500 });
  }
}
