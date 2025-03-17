import React, { useState } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Tiptap from "../../molecules/Tiptap";

const skillOptions = [
  "JavaScript", "React", "Node.js", "Python", "Java", 
  "C#", "Ruby", "Go", "TypeScript", "Vue.js", "Angular"
];

interface StepSecondFormProps {
    form: any; 
    skills: string[]; // Menerima daftar skills sebagai props
    onSelectSkill: (skill: string) => void; // Menerima fungsi pemilihan skill
    onRemoveSkill: (skill: string) => void; // Menerima fungsi hapus skill
  }

export const StepSecondForm: React.FC<StepSecondFormProps> = ({ form, onSelectSkill, skills, onRemoveSkill }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSkills, setFilteredSkills] = useState(skillOptions);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredSkills(skillOptions.filter(skill => skill.toLowerCase().includes(value.toLowerCase())));
  };

 
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault(); 

     
      if (!skills.includes(inputValue)) {
        onSelectSkill(inputValue);
      }
      setInputValue(""); 
    }
  };

  
  return (
    <div>
      {/* Responsibilities Section */}
      <div className="py-4 border-b border-gray-200 grid lg:grid-cols-2 gap-y-6">
        <div>
          <FormLabel className="text-xs font-semibold">Responsibilities</FormLabel>
          <p className="text-xs text-gray-600 mt-2">List key duties and tasks required for this role</p>
        </div>
        <FormField
          control={form.control}
          name="responsibilities"
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

      {/* Skills Section */}
      <div className="py-4 border-b border-gray-200 grid lg:grid-cols-2 gap-y-6 relative">
        <div>
          <FormLabel className="text-xs font-semibold">Skills</FormLabel>
          <p className="text-xs text-gray-600 mt-2">Select or enter relevant skills</p>
        </div>
        <div>
          {/* Input untuk mencari skill */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Tangani Enter untuk skill baru
            placeholder="Start typing to search skills..."
            className="w-full px-4 h-10 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Dropdown untuk skill yang tersedia */}
          {inputValue && filteredSkills.length > 0 && (
            <ul className="absolute top-full left-0 w-full border border-gray-300 bg-white shadow-md mt-1 rounded-md z-10">
              {filteredSkills.map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => onSelectSkill(skill)}
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}

          {/* Jika tidak ada skill yang ditemukan, beri opsi untuk menambahkan */}
          {inputValue && filteredSkills.length === 0 && (
            <div className="absolute top-full left-0 w-full border border-gray-300 bg-white shadow-md mt-1 rounded-md z-10 p-2">
              <p className="text-gray-500 text-sm">Press <strong>Enter</strong> to add "{inputValue}"</p>
            </div>
          )}

          {/* Daftar skills yang dipilih */}
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-2 text-xs py-1 rounded-md flex items-center space-x-1"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => onRemoveSkill(skill)}
                  className="text-red-500 text-xs font-bold ml-1"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    
    </div>
  );
};
