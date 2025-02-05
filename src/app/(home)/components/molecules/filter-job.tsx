import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import '../style/style.css';

type Filters = {
  schedule: string[];
  employment: string[];
  location: string;
  salary: number[];
  category: string;
};

const FilterJobs = () => {
  const [filters, setFilters] = useState<Filters>({
    schedule: ["Full time", "Part time"] as string[],
    employment: ["Full day", "Flexible schedule"] as string[],
    location: "All Locations",
    salary: [5000],
    category: "All Categories",
  });

  const handleCheckboxChange = (category: keyof Filters, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[category] as string[];

      return {
        ...prev,
        [category]: currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  return (
    <div className="w-full lg:block hidden max-w-[280px] p-5 max-h-[600px] bg-white mt-4 rounded-xl ">
      {/* Header */}
      <h1 className="text-lg font-semibold text-gray-800 mb-6">Filter Jobs</h1>

      {/* Scrollable Filters */}
      <div className="h-[85%] overflow-y-auto pr-2 space-y-6 custom-scrollbar">
        {/* Working Schedule */}
        <div>
          <h2 className="text-xs font-semibold text-gray-700 mb-2">Working Schedule</h2>
          {["Full time", "Part time", "Internship",].map((item) => (
            <div key={item} className="flex items-center space-x-2 mb-2">
              <Checkbox
                checked={filters.schedule.includes(item)}
                onCheckedChange={() => handleCheckboxChange("schedule", item)}
              />
              <span className="text-gray-600 text-xs">{item}</span>
            </div>
          ))}
        </div>

        {/* Employment Type */}
        <div>
          <h2 className="text-xs font-semibold text-gray-700 mb-2">Employment Type</h2>
          {["Full day", "Flexible schedule", "Shift work", "Distant work", "Shift method"].map((item) => (
            <div key={item} className="flex items-center space-x-2 mb-2">
              <Checkbox
                checked={filters.employment.includes(item)}
                onCheckedChange={() => handleCheckboxChange("employment", item)}
              />
              <span className="text-gray-600 text-xs">{item}</span>
            </div>
          ))}
        </div>

        {/* Location Filter */}
        <div>
          <h2 className="text-xs font-semibold text-gray-700 mb-2">Location</h2>
          <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, location: value }))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Locations">All Locations</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="New York">New York</SelectItem>
              <SelectItem value="Los Angeles">Los Angeles</SelectItem>
              <SelectItem value="San Francisco">San Francisco</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Salary Filter */}
        <div>
          <h2 className="text-xs font-semibold text-gray-700 mb-2">Salary Range</h2>
          <Slider
            defaultValue={filters.salary}
            min={1000}
            max={10000}
            step={500}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, salary: value }))}
          />
          <p className="text-xs text-gray-500">Min: ${filters.salary[0]} - Max: $10,000</p>
        </div>

        {/* Job Category */}
        <div>
          <h2 className="text-xs font-semibold text-gray-700 mb-2">Job Category</h2>
          <Select onValueChange={(value) => setFilters((prev) => ({ ...prev, category: value }))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Categories">All Categories</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      <Button className="w-full mt-6">Apply Filters</Button>
      </div>
    </div>
  );
};

export default FilterJobs;
