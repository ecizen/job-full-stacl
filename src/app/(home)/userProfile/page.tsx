"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Upload, X } from "lucide-react";

interface ProfileFormData {
  fullName: string;
  phoneNumber: string;
  linkedIn: string;
  portfolio: string;
  bio: string;
  location: string;
  skills: string;
  experience: string;
  education: string;
  avatar: File | null;
}

const ProfileForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm<ProfileFormData>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "complete">("idle");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue("avatar", file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setValue("avatar", null);
  };

  const onSubmit = async (data: ProfileFormData) => {
    setUploadStatus("uploading");

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "skills") {
        formData.append(key, JSON.stringify(value.split(",")));
      } else if (value) {
        formData.append(key, value);
      }
    });

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("complete");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Profile update error:", error);
      setUploadStatus("idle");
    }
  };

  return (
    <Card className="max-w-3xl mx-auto shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center text-gray-800">Update Your Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Full Name</Label>
              <Input {...register("fullName")} placeholder="Your Name" className="mt-1" />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input {...register("phoneNumber")} placeholder="Your Phone Number" className="mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>LinkedIn</Label>
              <Input {...register("linkedIn")} placeholder="Your LinkedIn URL" className="mt-1" />
            </div>
            <div>
              <Label>Portfolio</Label>
              <Input {...register("portfolio")} placeholder="Your Portfolio URL" className="mt-1" />
            </div>
          </div>

          <div>
            <Label>Bio</Label>
            <Textarea {...register("bio")} placeholder="Tell something about yourself" className="mt-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Location</Label>
              <Input {...register("location")} placeholder="City, Country" className="mt-1" />
            </div>
            <div>
              <Label>Skills</Label>
              <Input {...register("skills")} placeholder="Comma separated skills" className="mt-1" />
            </div>
          </div>

          <div>
            <Label>Experience</Label>
            <Textarea {...register("experience")} placeholder="Your work experience" className="mt-1" />
          </div>

          <div>
            <Label>Education</Label>
            <Textarea {...register("education")} placeholder="Your education details" className="mt-1" />
          </div>

          {/* Upload Avatar */}
          <div className="space-y-2">
            <Label>Upload Avatar</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100 transition">
              <input type="file" id="avatar-upload" accept="image/*" className="hidden" onChange={handleFileChange} />
              <label htmlFor="avatar-upload" className="cursor-pointer flex flex-col items-center">
                <Upload className="w-10 h-10 text-gray-500 mb-2" />
                <span className="text-sm text-gray-600">Choose a file or drag & drop it here</span>
              </label>
            </div>
          </div>

          {selectedFile && (
            <div className="mt-2 p-2 border rounded-lg flex items-center justify-between bg-gray-100 shadow-sm">
              <div>
                <p className="text-sm font-medium">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(2)} KB</p>
              </div>
              <button onClick={removeFile} className="text-gray-500 hover:text-red-600 transition">
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" disabled={uploadStatus === "uploading"} className="w-full py-2 text-lg">
              {uploadStatus === "uploading" ? "Updating..." : "Update Profile"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
