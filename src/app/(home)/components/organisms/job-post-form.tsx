'use client';

import React, {  useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {  any, z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { ArrowLeft } from 'lucide-react';
import { StepZeroForm } from './post-component/step-zero';
import { StepFirstForm } from './post-component/step-first';
import { StepSecondForm } from './post-component/step-secong';
import { skillOptions } from '@/app/(routes)/components/atoms/constant-data';
import { StepThirdForm } from './post-component/step-third';
import  { SummaryForm } from './post-component/review-form';
import { StepFourForm } from './post-component/step-form';
import { useParams, useRouter } from 'next/navigation';

const steps = [
  'Job Details',
  'Company Info',
  'Responsibilitis',  
  'Requirements',
  'Salary',
];

const jobSchema = z.object({
  jobTitle: z.string().min(1, 'Job title is required'),
  description: z.string().min(1, 'Job description is required'),
  jobType: z.array(z.string()).min(1, 'At least one employment type is required'),
  schedule: z.array(z.string()).min(1, 'Working schedule is required'),
  company: z.string().min(1, 'Company name is required'),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  responsibilities: z.string().min(1, 'Responsibilities are required'),
  skills: z.array(z.string()).min(1, 'At least one skill is required'),
  salary: z.string().min(1, 'Salary type is required'),
  requirements: z.string().min(1, 'Requirements are required'),
  salaryAmount: z.string().min(1, "Salary amount is required"),
  paymentType: z.string().optional(),
});



export default function JobPostForm() {

  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter()
  const [step, setStep] = useState(0);
  const form = useForm({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      jobTitle: '',
      description: '',
      salaryAmount: '',
       paymentType: '',
      jobType: [] as string[],
      schedule: '',
      company: '',
      country: '',
      city: '',
      responsibilities: '',
      requirements: '',
      salary: '',
      skills: [] as string[]
    },
  });

  console.log(form.formState.errors);

const stepFields: Record<number, string[]> = {
  0: ["jobTitle", "company", "location"],
  1: ["jobType", "description"],
  2: ["responsibilities", "skills"],
  3: ["requirements", "schedule"],
  4: ["salaryAmount", "salary"],
};

  

  const { control, handleSubmit, setValue, watch, trigger } = form;

  const nextStep = async () => {
    const fields = stepFields[step];
    const isValid = await trigger(fields as any);

    if (!isValid) return
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };
  

  
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const [isCustom, setIsCustom] = useState(false);

  const selectedJobTypes = form.watch("jobType", []);

   const [inputValue, setInputValue] = useState("");
    const [filteredSkills, setFilteredSkills] = useState(skillOptions);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      setFilteredSkills(skillOptions.filter(skill => skill.toLowerCase().includes(value.toLowerCase())));
    };
  
    const handleSelectSkill = (skill: string) => {
      const currentSkills = form.getValues("skills") || [];
      if (!currentSkills.includes(skill)) {
        form.setValue("skills", [...currentSkills, skill]);
      }
      setInputValue(""); 
    };
  
    const handleRemoveSkill = (skill: string) => {
      const updatedSkills = form.getValues("skills").filter((s: string) => s !== skill);
      form.setValue("skills", updatedSkills);
    };

    useEffect(() => {
      if (!form.getValues("salary")) {
        form.setValue("salary", "Monthly");
      }
    }, [form]);

    const onSubmit = (data: object) => {
      console.log(data);
    };

    const handleFinalSubmit = async () => {
      const data = form.getValues();
      try {
        const response = await fetch(id ? `/api/jobs/${id}` : '/api/jobs', {
          method: id ? 'PUT' : 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, ...data }),
        });
  
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Failed to submit job post');
  
        alert(`Job post ${id ? 'updated' : 'submitted'} successfully!`);
        router.push('/myjob');
      } catch (error: any) {
        console.error('Error submitting job post:', error);
        alert(error.message || 'Failed to submit job post.');
      }
    };
    

    useEffect(() => {
      if (id) {
        setIsEditing(true);
        fetch(`/api/jobs?id=${id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              form.reset({
                jobTitle: data.jobTitle,
                description: data.description,
                salaryAmount: data.salaryAmount,
                paymentType: data.paymentType || '',
                jobType: data.jobType,
                schedule: data.schedule,
                company: data.company,
                country: data.country,
                city: data.city,
                responsibilities: data.responsibilities,
                requirements: data.requirements,
                skills: data.skills || [],
              });
            }
          })
          .catch((err) => console.error('Error fetching job:', err));
      }
    }, [id, form]);
    
       
  
  
  return (
    <Card className="w-full  lg:border-none border-b-0 lg:shadow-none shadow-none">
      <CardHeader>
            <div className='mb-6'>
                <h1 className='text-xl font-semibold text-blue-600'>Create a Job Post</h1>
            </div>
        <CardTitle className='text-md'>{steps[step]}</CardTitle>
        <Progress value={(step + 1) * 20} className="mb-4 h-[3px] "indicatorColor="bg-[#5E46FE]" />
      </CardHeader>
      <CardContent>
        <Form {...form} >
            <form  onSubmit={handleSubmit(onSubmit)}>

            
            {step === 0 && (
              <StepZeroForm form={form}/>
            )}

            {step === 1 && (
             <StepFirstForm form={form.control} selectedJobTypes={selectedJobTypes}/>
            )}

            {step === 2 && (
              <StepSecondForm form={form.control}
              skills={form.watch("skills", [])} 
              onSelectSkill={handleSelectSkill} 
              onRemoveSkill={handleRemoveSkill} 
              />
            )}
            {step === 3 && (
              <StepThirdForm form={form.control}
              />
            )}
            {step === 4 && (
              <StepFourForm form={form.control}
               isCustom={isCustom}
               setIsCustom={setIsCustom}
              />
            )}

            <div className="flex justify-between mt-4">
              <Button onClick={prevStep} disabled={step === 0} variant="outline" className={`${step !== 0? 'border border-blue-600': 'border-none'} rounded-full flex items-center space-x-2 justify-center`}>
                <ArrowLeft size={20} className='text-blue-600'/>
              <p className={`${step !== 0 ? 'text-blue-500' : 'text-gray-500'} text-sm`}>
                Previous
                </p>
              </Button>
              {step < steps.length - 1 ? (
                <Button
                type="submit"
                onClick={nextStep}
                disabled={!watch(stepFields[step]?.[0] as "jobTitle" | "description" | "jobType" | "schedule" | "company" | "country"| "city" | "responsibilities" | "skills" | "salary" | "requirements" | "salaryAmount" | "paymentType")}
                className={`rounded-full px-4 py-2 ${watch(stepFields[step]?.[0] as "jobTitle" | "description" | "jobType" | "schedule" | "company" | "country"|"city" | "responsibilities" | "skills" | "salary" | "requirements" | "salaryAmount" | "paymentType") ? 'bg-blue-600 text-white cursor-pointer' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}

              >
                Continue
              </Button>
              
              ) : (
                <SummaryForm 
                jobTitle={form.getValues('jobTitle')}
                company={form.getValues('company')}
                country={form.getValues('country')}
                city={form.getValues('city')}        
                description={form.getValues('description')}
                jobType={form.getValues('jobType')}
                responsibilities={form.getValues('responsibilities')}
                skills={form.getValues('skills')}
                requirements={form.getValues('requirements')}
                schedule={form.getValues('schedule')}
                salaryAmount={form.getValues('salaryAmount')}
                paymentType={form.getValues("paymentType")}
                onSubmit={handleFinalSubmit}
                />
              )}
            </div>
            </form>
        </Form>
      </CardContent>
    </Card>
  );
}
