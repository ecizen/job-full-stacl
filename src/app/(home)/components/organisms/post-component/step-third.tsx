import React, { useState } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Tiptap from "../../molecules/Tiptap";
import './style.css'

const skillOptions = [
  "JavaScript", "React", "Node.js", "Python", "Java", 
  "C#", "Ruby", "Go", "TypeScript", "Vue.js", "Angular"
];

interface StepSecondFormProps {
    form: any; 
  
  }

  const Schedule = [
    { key: "Night shift", label: "Night shift" },
    { key: "Full day", label: "Full day" },
    { key: "Day shift", label: "Day shift" },
  ];

export const StepThirdForm: React.FC<StepSecondFormProps> = ({ form }) => {
    const [isOpen, setIsOpen] = useState(false);

    

  
  return (
    <div>
      {/* Responsibilities Section */}
      <div className="py-4 border-b border-gray-200 grid lg:grid-cols-2 gap-y-6">
        <div>
          <FormLabel className="text-xs font-semibold">Requirements</FormLabel>
          <p className="text-xs text-gray-600 mt-2">List key duties and tasks required for this role</p>
        </div>
        <FormField
          control={form.control}
          name="requirements"
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
      <div className="py-4 border-b border-gray-200 grid lg:grid-cols-2 gap-y-6">
        <div>
          <FormLabel className="text-xs font-semibold">Schedule</FormLabel>
        </div>
        <FormField
          control={form.control}
          name="schedule"
          defaultValue={[]}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                
                <div className="relative">
                  <div
                    className="custom-select-box text-xs"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="px-2 p-1 flex bg-blue-100 text-blue-700 gap-2">
                    {(field.value ?? []).length > 0 ? field.value.join(", ") : "Select..."}
                    </span>
                  </div>
                  {isOpen && (
                    <div className="custom-dropdown">
                      {Schedule.map((schedule) => (
                        <label key={schedule.key} className="custom-option">
                          <input
                          className=""
                            type="checkbox"
                            checked={Array.isArray(field.value) && field.value.includes(schedule.label)}
                            onChange={() =>
                              field.onChange(
                                field.value.includes(schedule.label)
                                  ? field.value.filter((s: string) => s !== schedule.label)
                                  : [...(field.value ?? []), schedule.label]
                              )
                            }
                          />
                          <span className="text-xs">
                          {schedule.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
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
