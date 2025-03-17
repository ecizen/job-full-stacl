import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "lucide-react";
import React, { useMemo, useState } from "react";

interface SummaryFormProps {
  jobTitle: string;
  company: string;
  country: string;
  city: string
  description: string;
  jobType: string | string[];
  schedule: string;
  responsibilities: string;
  skills: string | string[];
  requirements: string;
  salaryAmount: string;
  paymentType: string;
  isCustom?: boolean; 
  onSubmit: () => void;
  // Tambahkan isCustom sebagai prop opsional
}

export const SummaryForm: React.FC<SummaryFormProps> = ({
  jobTitle,
  company,
  country,
  city,
  description,
  jobType,
  schedule,
  responsibilities,
  skills,
  requirements,
  salaryAmount,
  paymentType,
  isCustom = false,
  onSubmit
  // Default false jika tidak diberikan
}) => {
  const [cancel, setCancel] = useState(true);

  const handleCancel = () => {
    setCancel(!cancel);
  };

  // Data yang akan ditampilkan di modal
  const summaryData = [
    { label: "Job Title", value: jobTitle },
    { label: "Company", value: company },
    { label: "Location", value: country,city },
    { label: "Description", value: <span dangerouslySetInnerHTML={{ __html: description }} /> },
    { label: "Employment Type", value: jobType },
    { label: "Responsibilities", value: <span dangerouslySetInnerHTML={{ __html: responsibilities }} /> },
    { label: "Skills", value: skills },
    { label: "Requirements", value: <span dangerouslySetInnerHTML={{ __html: requirements }} /> },
    { label: "Schedule", value: schedule },
    { 
      label: "Salary", 
      value: `${salaryAmount} ${isCustom ? paymentType : 'Monthly'}`
    },
  ];

  return (
    <div className={`${cancel ? "block" : "hidden"}`}>
      <Dialog >
        <DialogTrigger>Confirm</DialogTrigger>
        <DialogContent className="overflow-y-auto max-h-[600px]">
          <DialogHeader>
            <DialogTitle className="text-md">Are you absolutely sure?</DialogTitle>
            <DialogDescription className="text-xs">
              Please review the job summary before submission.
            </DialogDescription>
          </DialogHeader>
          <article className="mt-4">
            {summaryData.map((item, index) => (
              <div key={index} className="mb-2 py-2 border-b border-gray-200">
                <h1 className="text-sm font-semibold">{item.label}:</h1>
                <p className="text-sm text-neutral-600">{item.value}</p>
              </div>
            ))}
          </article>
          <DialogFooter>
            <div className="flex items-center justify-end space-x-2">
              <DialogClose className="text-sm px-4 h-8 border-neutral-400 border rounded-full text-neutral-700">
                Cancel
              </DialogClose>
              <button onClick={onSubmit} type="button" className="text-sm px-4 h-8 bg-blue-600 rounded-full text-white">
                Submit
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
