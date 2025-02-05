interface CardHireProps {
  id: number;
  image: any;
  company: string;
  country: string;
  city: string;
  jobPostition: string;
  jobType: string | string[];
  description: string;
  responsibilities: string | string[];
  requirdSkills: string | string[];
  schedule: string | string[];
  requirements: string | string[];
  minSalary: number;
  maxSalary: number;
}