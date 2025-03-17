import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import React, { useState } from "react"
interface CardHireProps {
    company: string;
    jobPostition: string;
  
  }


export const DialogFormApply:React.FC<CardHireProps> = ({company, jobPostition}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "complete">("idle");
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus("uploading");
      setUploadProgress(0);
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setUploadStatus("complete"), 500);
      }
    }, 500);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setUploadStatus("idle");
    setUploadProgress(0);
  };
  
    return (
        <Dialog>
            <DialogTrigger className="text-sm text-white px-4 h-10 rounded-full bg-blue-600 z-50 backdrop-blur-3xl shadow-2xl">Apply job</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-md">Apply for {jobPostition} at {company}</DialogTitle>
                    <DialogDescription className="text-sm">
                    You're applying for {jobPostition} at {company}. Upload your CV and ensure your profile is updated before submitting.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className=" space-y-2">
                        <Label htmlFor="jobPosition" className="text-right ">
                        Job Title
                        </Label>
                        <Input id="jobPosition" value={jobPostition} className="border border-neutral-400" disabled={true} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company" className="text-right mb-2">
                        Company
                        </Label>
                        <Input id="company" value={company} className="border border-neutral-400" disabled={true} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company" className="text-right mb-2">
                        Upload Cv
                        </Label>
                    <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-100 transition">
                        <input type="file" id="file-upload" accept=".pdf,.docx" className="hidden" onChange={handleFileChange} />
                        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-500 mt-4" />
                        <span className="text-sm text-gray-600">Choose a file or drag & drop it here</span>
                        <span className="text-xs text-gray-400">PDF, DOCX formats, up to 5MB</span>
                        </label>
                    </div>
                    </div>

                    {selectedFile && (
            <div className="mt-2 p-2 border rounded-lg flex items-center justify-between bg-gray-100">
              <div className="w-full">
                <p className="text-sm font-medium">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                {uploadStatus === "uploading" && (
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}

                <p className={`text-xs font-medium mt-1 ${uploadStatus === "uploading" ? "text-blue-600" : "text-green-600"}`}>
                  {uploadStatus === "uploading" ? "Uploading..." : "Complete ✅"}
                </p>
              </div>

              <button onClick={removeFile} className="text-gray-500 hover:text-red-600 transition">
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
                    </div>
            <DialogFooter className="flex items-center space-x-2">
                <Button className="text-sm text-white bg-blue-600" type="submit">Submit</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}