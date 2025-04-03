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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Computer Science Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Computer Science is dedicated to providing a **cutting-edge curriculum** 
            that prepares students for careers in **software development, data science, cybersecurity, 
            artificial intelligence, and cloud computing**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our faculty members bring extensive experience in **programming, networking, and advanced computing**. 
            Students gain hands-on expertise through **coding bootcamps, hackathons, and industry collaborations**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The department emphasizes **real-world projects**, **internships**, and **tech-based research** 
            to help students stay ahead in the evolving technology landscape.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Computer Science Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-indigo-700 p-3 rounded-md text-center">
            COMPUTER SCIENCE DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty Members",
              "Programs Offered",
              "Research & Innovations",
              "Coding Club & Hackathons",
              "Industry Collaborations",
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

          {/* Tech Skill Development */}
          <div className="mt-6 bg-indigo-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-indigo-800">Tech Skill Development</h3>
            <p className="text-gray-700 mt-2">Python, AI, Web Development & More</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Advanced Labs & Resources</h3>
            <img 
              src={logo} 
              alt="Computer Science Lab"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Access to **AI labs, high-performance computing, cloud platforms, and IoT devices**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
