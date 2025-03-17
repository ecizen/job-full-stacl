import React from "react";
import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import COUNTRIES from "@/app/(routes)/components/atoms/constant-data";

interface Step0Props {
  form: UseFormReturn<{
    jobTitle: string;
    description: string;
    salaryAmount: string;
    paymentType: string;
    jobType: string[];
    schedule: string;
    company: string;
    city: string;
    country: string;
    responsibilities: string;
    requirements: string;
    salary: string;
    skills: string[];
  }>;
}

export const StepZeroForm: React.FC<Step0Props> = ({ form }) => {
  const location = React.useMemo(() => COUNTRIES, []);

  return (
    <div>
      <div className='py-4 border-b border-gray-200 grid lg:grid-cols-2 gap-y-6'>
        <div>
          <FormLabel className="text-xs font-semibold">Job Title</FormLabel>
          <p className='text-xs text-gray-600 mt-2'>A job title must describe one position only</p>
        </div>
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} className='text-xs placeholder:text-xs px-4 h-10 rounded-sm' placeholder='e.g. "Software Development"' />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
      </div>
      <div className='py-4 border-b-0 border-gray-200 grid lg:grid-cols-2 gap-y-4'>
        <div>
          <FormLabel className="text-xs font-semibold">Company</FormLabel>
          <p className='text-xs text-gray-600 mt-2 max-w-[300px]'>You can pick multiple work schedules</p>
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} className='text-xs placeholder:text-xs px-4 h-10 rounded-sm' placeholder='"Google"' />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
      </div>
      <div className='py-4 border-b-0 border-gray-200 grid lg:grid-cols-2 gap-y-4'>
        <div>
          <FormLabel className="text-xs font-semibold">Company Location</FormLabel>
          <p className='text-xs text-gray-600 mt-2 max-w-[300px]'>The company location must be clear or the position is genuine and not fake</p>
        </div>
        <div className="space-y-2">

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full h-10 px-4">
                    <SelectValue placeholder="Select a country" className="text-gray-500 placeholder:text-gray-400" />
                  </SelectTrigger>
                  <SelectContent>
                    {location.map((item) => (
                      <SelectItem key={item.id} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} className='text-xs placeholder:text-xs px-4 h-10 rounded-sm' placeholder='"city location"' />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
          />
      </div>
          </div>
    </div>
  );
};