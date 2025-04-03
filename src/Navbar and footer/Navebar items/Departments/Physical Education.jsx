import logo from "../../../assets/image/entitylogo.gif";
import banner from "../../../assets/image/LOGO.png";



const AboutDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="text-red-900 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">About the Department</h1>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content (Main Description) */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-red-900 mb-4">Physical Education Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Physical Education is dedicated to promoting **health, fitness, and sports 
            excellence**. Our programs focus on **sports science, athletic training, coaching techniques, and 
            overall well-being**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our faculty consists of experienced **coaches, trainers, and sports scientists** who provide 
            hands-on training, theoretical knowledge, and research-based methodologies to develop future 
            sports professionals.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The department features **modern sports facilities, fitness centers, and training labs** to 
            enhance student performance in various physical disciplines, ensuring success in **competitive 
            sports, wellness coaching, and physical education careers**.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Physical Education Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-red-700 p-3 rounded-md text-center">
            PHYSICAL EDUCATION DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty & Coaches",
              "Sports Training Programs",
              "Health & Fitness Courses",
              "Athletic Events & Competitions",
              "Research & Publications",
              "Syllabus & Curriculum",
              "Board of Studies Members",
            ].map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a href="#" className="text-red-700 font-medium hover:text-red-900 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Special Training Programs */}
          <div className="mt-6 bg-red-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-red-800">Advanced Sports Training</h3>
            <p className="text-gray-700 mt-2">Specialized Coaching & Fitness Assessments</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Modern Sports Facilities</h3>
            <img 
              src={logo} 
              alt="Sports Complex"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Equipped with **Gymnasiums, Outdoor Sports Fields, and Advanced Training Labs** for holistic 
              physical development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
