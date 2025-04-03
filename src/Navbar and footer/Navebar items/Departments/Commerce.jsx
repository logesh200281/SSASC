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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Commerce Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Commerce is committed to excellence in education, research, and 
            professional development. Our curriculum is designed to provide students with 
            **a strong foundation in accounting, finance, taxation, and business management**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We emphasize **practical learning**, integrating modern tools like **Tally, GST software, 
            and financial analysis techniques**. Our faculty members bring industry insights 
            to the classroom, ensuring students gain real-world exposure.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The department also offers **guest lectures, industry collaborations, certification programs, 
            and entrepreneurial development initiatives** to empower students with critical thinking 
            and leadership skills in the commercial sector.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Commerce Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-green-700 p-3 rounded-md text-center">
            COMMERCE DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty Members",
              "Programs Offered",
              "Industry & Internship Opportunities",
              "Commerce Club Activities",
              "Research & Publications",
              "Syllabus & Curriculum",
              "Board of Studies Members",
            ].map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a href="#" className="text-blue-700 font-medium hover:text-blue-900 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Skill Development Initiatives */}
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-green-800">Skill-Based Learning</h3>
            <p className="text-gray-700 mt-2">Tally, GST, Digital Marketing & More</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Learning Resources & Labs</h3>
            <img 
              src={logo} 
              alt="Commerce Learning Center"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Access to **business case studies, finance labs, and e-learning platforms** to 
              enhance knowledge and skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
