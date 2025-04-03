import logo from "../../../assets/image/entitylogo.gif";
import banner from "../../../assets/image/LOGO.png";

const AboutDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="text-blue-900 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">About the Department</h1>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content (Main Description) */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Biochemistry Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Biochemistry is dedicated to advancing scientific knowledge through research,
            innovative teaching methodologies, and industry collaborations. Our curriculum integrates 
            fundamental biochemical principles with cutting-edge advancements in molecular biology and 
            biotechnology.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The department is equipped with <strong>modern laboratories</strong>, <strong>advanced research facilities</strong>, and 
            <strong> high-speed internet access</strong> to enhance the learning experience. Our faculty members are 
            committed to nurturing students curiosity and scientific temperament.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With a strong emphasis on <strong>practical learning</strong>, <strong>clinical applications</strong>, and <strong>interdisciplinary 
            research</strong>, students are prepared for careers in pharmaceuticals, healthcare, and scientific 
            research institutions.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Biochemistry Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-green-700 p-3 rounded-md text-center">
            BIOCHEMISTRY DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty Members",
              "Research and Publications",
              "Laboratory Facilities",
              "Programs Offered",
              "Department Events",
              "Internship Opportunities",
              "Collaborations & MOUs",
            ].map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a href="#" className="text-blue-700 font-medium hover:text-blue-900 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Research Initiatives */}
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-green-800">Ongoing Research</h3>
            <p className="text-gray-700 mt-2">Exploring New Frontiers in Biochemistry</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Laboratory Facilities</h3>
            <img 
              src={logo} 
              alt="Advanced Biochemistry Lab"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Equipped with <strong>high-end analytical instruments</strong>, <strong>molecular biology tools</strong>, and 
              <strong> biochemical assay facilities</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
