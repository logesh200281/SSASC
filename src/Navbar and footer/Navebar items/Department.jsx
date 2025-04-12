import { Link } from "react-router-dom";
import {
  FaFlask,
  FaMicroscope,
  FaUserTie,
  FaMoneyBillWave,
  FaLaptopCode,
  FaBook,
  FaCalculator,
  FaBacteria,
  FaDumbbell,
  FaAtom,
  FaLanguage,
  FaFeatherAlt,
  FaUniversity,
  FaBookOpen,
} from "react-icons/fa";

const departments = [
  { name: "Biochemistry", icon: <FaFlask className="text-blue-600 text-4xl" /> },
  { name: "Biotechnology", icon: <FaMicroscope className="text-green-600 text-4xl" /> },
  { name: "Business Administration", icon: <FaUserTie className="text-indigo-600 text-4xl" /> },
  { name: "Commerce", icon: <FaMoneyBillWave className="text-yellow-600 text-4xl" /> },
  { name: "Computer Science", icon: <FaLaptopCode className="text-purple-600 text-4xl" /> },
  { name: "English", icon: <FaBook className="text-pink-600 text-4xl" /> },
  { name: "Mathematics", icon: <FaCalculator className="text-blue-500 text-4xl" /> },
  { name: "Microbiology", icon: <FaBacteria className="text-teal-600 text-4xl" /> },
  { name: "Physical Education", icon: <FaDumbbell className="text-red-600 text-4xl" /> },
  { name: "Physics", icon: <FaAtom className="text-orange-600 text-4xl" /> },
  { name: "Sanskrit", icon: <FaLanguage className="text-amber-700 text-4xl" /> },
  { name: "Tamil", icon: <FaFeatherAlt className="text-rose-700 text-4xl" /> },
  { name: "IQAC", icon: <FaUniversity className="text-cyan-700 text-4xl" /> },
  { name: "Library", icon: <FaBookOpen className="text-lime-700 text-4xl" /> },
];

const Department = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-10 border-b-4 border-blue-600 pb-2">
        Departments
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {departments.map((dept, index) => (
          <Link
            key={index}
            to={`/department/${dept.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="group border-2 border-blue-200 bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:border-blue-500 transition duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="transition-transform duration-300 group-hover:scale-110">
                {dept.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                {dept.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Department;
