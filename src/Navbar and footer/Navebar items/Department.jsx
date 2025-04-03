import { Link } from "react-router-dom";

const departments = [
  "Biochemistry",
  "Biotechnology",
  "Business Administration",
  "Commerce",
  "Computer Science",
  "English",
  "Mathematics",
  "Microbiology",
  "Physical Education",
  "Physics",
  "Sanskrit",
  "Tamil",
  "IQAC",
  "Library",
];

const Department = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Departments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {departments.map((dept, index) => (
          <Link
            key={index}
            to={`/department/${dept.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-white p-6 rounded-lg shadow-md text-center font-semibold text-gray-800 transition duration-300 transform hover:scale-105 hover:bg-blue-100 hover:shadow-lg"
          >
            {dept}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Department;
