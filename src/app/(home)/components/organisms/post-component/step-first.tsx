import COUNTRIES, { JobTypePost } from "@/app/(routes)/components/atoms/constant-data"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React, { useMemo } from "react"
import Tiptap from "../../molecules/Tiptap"
import { Checkbox } from "@/components/ui/checkbox"


interface Step0Props {
    form: any,
    selectedJobTypes: any

}
export const StepFirstForm: React.FC<Step0Props> = ({ form , selectedJobTypes}) => {

  
  const jobType = useMemo(() => JobTypePost, []);
 // Mengambil nilai langsung dari form
  
  const handleCheckboxChange = (jobType: string, checked: boolean, onChange: (value: string[]) => void) => {
    const updatedSelection = checked
      ? [...selectedJobTypes, jobType] // Tambah jika belum ada
      : selectedJobTypes.filter((item: any) => item !== jobType); // Hapus jika sudah ada

    onChange(updatedSelection); // Set nilai ke react-hook-form
  };

  return (
    <div>
      <div className="py-4 border-b border-gray-200 grid lg:grid-cols-2 gap-y-4">
        <div>
          <FormLabel className="text-xs font-semibold">Job Description</FormLabel>
          <p className="text-xs text-gray-600 mt-2 max-w-[300px]">You can pick multiple work schedules</p>
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Tiptap description={field.value} onChange={field.onChange} value={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="py-4 border-b border-gray-200 grid lg:grid-cols-2 gap-y-4">
        <div>
          <FormLabel className="text-xs font-semibold">Employment type</FormLabel>
          <p className="text-xs text-gray-600 mt-2">Describe job employment type</p>
        </div>
        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col gap-2">
                  {jobType.map((item) => {
                    const isChecked = selectedJobTypes.includes(item.label);
                    return (
                      <div
                        key={item.id}
                        className={`space-x-2 px-2 py-2 w-full flex items-center transition-all duration-500 rounded-sm 
                          ${isChecked ? "border border-blue-600" : "border border-gray-300"}`}
                      >
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(item.label, checked as boolean, field.onChange)
                          }
                          className="text-sm"
                        />
                        <label className="text-sm font-medium leading-none text-gray-600">{item.label}</label>
                      </div>
                    );
                  })}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
