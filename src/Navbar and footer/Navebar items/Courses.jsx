import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  useEffect(() => {
    // Fetch courses from localStorage
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

    console.log("Fetched Courses:", storedCourses); // Debugging: Check the data

    // Ensure every course has a fees structure, received amount, duration, and degree
    const updatedCourses = storedCourses.map((course) => {
      const duration = course.duration?.includes("Year") ? course.duration : `${course.duration} Years`;
      const degree = course.degree || "N/A"; // Ensure degree is present

      return {
        ...course,
        fees: course.fees ?? { tuition: 0, hostel: 0, library: 0, total: 0 },
        receivedAmount: course.receivedAmount ?? 0, // Ensure receivedAmount exists
        duration,
        degree,
      };
    });

    console.log("Updated Courses:", updatedCourses); // Debugging: Check processed data

    setCourses(updatedCourses);
  }, []);

  // Extract unique departments from courses for the dropdown
  const departments = ["All", ...new Set(courses.map((course) => course.department))];

  // Filter courses based on selected department
  const filteredCourses = selectedDepartment === "All"
    ? courses
    : courses.filter((course) => course.department === selectedDepartment);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8eaf6] to-[#f3e5f5] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#5e35b1] tracking-wide">
          Sri Sankara Arts and Science College Course Details
        </h1>

        {/* Department Filter Dropdown */}
        <div className="mb-6 text-center">
          <label className="text-lg font-semibold text-[#5e35b1] mr-2">Filter by Department:</label>
          <select
            className="p-2 border border-gray-300 rounded-md shadow-sm"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-8">
          {filteredCourses.length === 0 ? (
            <p className="text-center text-red-500">No course data available.</p>
          ) : (
            filteredCourses.map((course, index) => (
              <div key={index} className="bg-white shadow-xl rounded-xl p-8 transition-all hover:scale-105">
                <h2 className="text-2xl font-semibold text-[#5e35b1] mb-4">
                  {course.name} {course.code ? `(${course.code})` : ""}
                </h2>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#5e35b1]">Department:</span> {course.department} 
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#5e35b1]">Degree:</span> {course.degree}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#5e35b1]">Program:</span> {course.program}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#5e35b1]">Duration:</span> {course.duration}
                </p>

                {/* Fees Section */}
                <div className="mt-4 border-t-2 border-[#f3e5f5] pt-4">
                  <h3 className="text-xl font-semibold text-[#5e35b1]">Fee Structure</h3>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#5e35b1]">Tuition Fees:</span> ₹{course.fees?.tuition ?? 0}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#5e35b1]">Hostel Fees:</span> ₹{course.fees?.hostel ?? 0}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#5e35b1]">Library Fees:</span> ₹{course.fees?.library ?? 0}
                  </p>
                  <p className="text-gray-700 font-bold text-lg">
                    <span className="font-semibold text-[#5e35b1]">Total Fees:</span> ₹{course.fees?.total ?? 0}
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/apply" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
