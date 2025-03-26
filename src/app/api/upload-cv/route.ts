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

export async function POST(req: NextRequest) {
  try {
    // Periksa sesi pengguna
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Ambil data dari request
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const jobPostId = formData.get("jobPostId") as string | null; // Ambil ID job yang dilamar

    if (!file || !jobPostId) {
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }

    // Konversi file ke Base64 untuk Cloudinary
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64File = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload ke Cloudinary
    const uploadResponse = await cloudinary.v2.uploader.upload(base64File, {
      folder: "cv_uploads",
      resource_type: "raw",
      format: "pdf"
    });

    const cvUrl = uploadResponse.secure_url;

    // Periksa apakah user ada di database
    const user = await db.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Simpan data ke dalam tabel JobApplication
    const jobApplication = await db.jobApplication.upsert({
      where: {
        userId_jobPostId: { userId: user.id, jobPostId }, // Sesuaikan dengan constraint unik di schema
      },
      update: { cvUrl }, // Jika sudah ada, update saja
      create: { userId: user.id, jobPostId, cvUrl }, // Jika belum ada, buat baru
    });
    

    return NextResponse.json({
      message: "Job application submitted successfully",
      application: jobApplication,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ message: "Error uploading file" }, { status: 500 });
  }
}
