import COUNTRIES from "@/app/(routes)/components/atoms/constant-data";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Clock, Send } from "lucide-react";
import React, { useState } from "react";

interface Step0Props {
  form: any;
  isCustom: any;
  setIsCustom: any;
}

const AmountOption = [
  { id: 1, option: "Monthly", logo: Clock },
  { id: 2, option: "Custom", logo: Send },
];

const PaymentTypes = ["Hourly", "Daily", "Yearly"];

export const StepFourForm: React.FC<Step0Props> = ({ form, setIsCustom, isCustom }) => {

  
  

  return (
    <div>
      <div className="py-4 border-b border-gray-200 grid lg:grid-cols-2 gap-y-6">
        <div>
          <FormLabel className="text-xs font-semibold">Salary</FormLabel>
          <p className="text-xs text-gray-600 mt-2">
            Choose how you prefer to pay for this job.
          </p>
        </div>
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup  
                  value={field.value || "Monthly"}
                  onValueChange={(value) => {
                    field.onChange(value);
                    setIsCustom(value === "Custom");
                  }}
                  className="grid grid-cols-2 gap-6 mb-6 "
                >
                  {AmountOption.map((item) => (
                    <label
                      key={item.id}
                      htmlFor={item.option}
                      className={`px-2 py-1 w-full lg:h-[120px] h-[70px] relative border rounded-md flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                        field.value === item.option ? "border-blue-600 border-2" : "border-gray-300"
                      }`}
                    >
                      <RadioGroupItem
                        value={item.option}
                        id={item.option}
                        checked={field.value === item.option}
                        className={`absolute left-2 top-2 ${field.value === item.option ? "border-blue-600" : "border-gray-400"} text-white border-2`}
                      />
                      <item.logo className={`w-4 h-4 mb-1 ${field.value === item.option ? "text-blue-600" : "text-gray-400"} lg:block hidden`} />
                      <span className={`text-sm ${field.value === item.option ? "text-blue-600" : ""}`}>{item.option}</span>
                    </label>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
              <div className="lg:mt-4  flex gap-4 items-center">
                <div className="flex-1">
                  <FormLabel className="text-xs font-semibold">
                    {isCustom ? "Custom Salary Amount" : "Monthly Salary Amount"}
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="salaryAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} type="number" placeholder={isCustom ? "Enter custom salary amount" : "Enter monthly salary amount"} className="mt-2 text-sm lg:text-xs" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {isCustom && (
                  <div className="flex-1">
                    <FormLabel className="text-xs font-semibold">Payment Type</FormLabel>
                    <FormField
                      control={form.control}
                      name="paymentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select onValueChange={field.onChange} value={field.value || "Hourly"}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                {PaymentTypes.map((type) => (
                                  <SelectItem key={type} value={type}>{type}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>
            </FormItem>
          )}
        />
      </div>
      <div className="py-4 border-b border-gray-200 grid lg:grid-cols-2 gap-y-4">
  <div>
    <FormLabel className="text-xs font-semibold">Company Logo</FormLabel>
    <p className="text-xs text-gray-600 mt-2">Upload your company logo.</p>
  </div>
  <FormField
    control={form.control}
    name="companyLogo"
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              field.onChange(file);
            }}
            className="mt-2 text-sm"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</div>

    </div>
  );
};
