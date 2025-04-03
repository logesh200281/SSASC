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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">English Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of English is committed to fostering **literary appreciation, 
            critical thinking, and communication skills** through a dynamic and engaging curriculum.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our faculty members specialize in **literature, linguistics, creative writing, and cultural studies**, 
            providing students with a deep understanding of **classic and contemporary texts**. 
            The department encourages students to explore **poetry, drama, fiction, and academic research**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With a focus on **language proficiency, public speaking, and writing excellence**, 
            students develop skills applicable in diverse careers such as **journalism, publishing, teaching, and corporate communications**.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="English Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-green-700 p-3 rounded-md text-center">
            ENGLISH DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty Members",
              "Literary Club & Activities",
              "Programs Offered",
              "Research & Publications",
              "Creative Writing Workshops",
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

          {/* Language & Literature Focus */}
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-green-800">Language & Literature</h3>
            <p className="text-gray-700 mt-2">Poetry, Prose, Drama, and Criticism</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Library & Resources</h3>
            <img 
              src={logo} 
              alt="English Department Resources"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Extensive collection of **literature, research journals, and digital archives**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
