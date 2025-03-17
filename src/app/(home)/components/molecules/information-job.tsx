import { Grid, List, Table } from "lucide-react";
import React, { useState, useEffect } from "react";

interface informationProps{
  layout: any,
  setLayout: any
}

const InformationJob:React.FC<informationProps> = ({layout, setLayout}) => {
  const rekomenedJobs = [
    { id: 1, label: "Frontend Dev" },
    { id: 2, label: "Backend Dev" },
    { id: 3, label: "Graphic Designer" },
    { id: 4, label: "Product Manager" },
    { id: 5, label: "Illustrator" },
    { id: 6, label: "UI/UX Designer" },
    { id: 7, label: "Data Analyst" },
    { id: 8, label: "Digital Marketing" },
  ];

  // State untuk menyimpan jumlah item yang akan ditampilkan
  const [displayedJobs, setDisplayedJobs] = useState(rekomenedJobs);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setDisplayedJobs(rekomenedJobs.slice(0, 6)); // Jika layar kecil, tampilkan hanya 6
      } else {
        setDisplayedJobs(rekomenedJobs); // Jika layar besar, tampilkan semua
      }
    };

    // Jalankan saat komponen pertama kali dimuat
    handleResize();

    // Tambahkan event listener untuk memantau perubahan ukuran layar
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize); // Bersihkan event listener
  }, []);



  const layouts = [
    { type: "grid", icon: <Grid size={16} /> , label: "Grid View"},
    { type: "table", icon: <Table size={16} />, label: "Table View" },
    { type: "list", icon: <List size={16} />, label: "List View" },
  ];

  const toggleLayout = () => {
    setLayout((prevLayout: any) => {
      const nextIndex = (layouts.findIndex((l) => l.type === prevLayout) + 1) % layouts.length;
      return layouts[nextIndex].type;
    });
  };

  return (
    <div className="py-4">
      <div className="w-full flex justify-between items-center lg:px-0 px-6">
        <div className="flex items-center lg:justify-start justify-between space-x-4">
          <h1 className="lg:text-3xl text-xl font-semibold">Recommended Jobs</h1>
          <h1 className="lg:text-lg lg:block hidden text-sm font-semibold border rounded-full px-4 py-1 text-blue-600 border-blue-600">
            3650
          </h1>
        </div>
        <div className="flex justify-end mb-4">
        <button className="px-3 h-8  border rounded-full text-xs flex items-center space-x-2 gap-2" onClick={toggleLayout}>
          {layouts.find((l) => l.type === layout)?.label}
          {layouts.find((l) => l.type === layout)?.icon}
        </button>
      </div>
  
      </div>

      {/* List Job */}
      <div className="mt-4 lg:px-0 px-6 flex lg:flex-nowrap flex-wrap items-center lg:justify-between justify-start gap-y-2 gap-x-1">
        {displayedJobs.map((item) => (
          <span
            key={item.id}
            className="py-1.5 px-2 text-xs text-gray-600 border border-gray-300 rounded-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg"
          >
            {item.label}
          </span>
        ))}
      </div>

      {/* Button "Show More" hanya muncul di mobile */}
      <div className="lg:hidden mt-4 lg:px-0 px-6">
        <button className="px-4 py-1 text-xs text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
          Show More
        </button>
      </div>
    </div>
  );
};

export default InformationJob;
