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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">About the Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Business Administration is dedicated to providing an industry-aligned
            curriculum that fosters innovation, leadership, and professional excellence. Our curriculum is
            designed to equip students with essential knowledge, analytical skills, and industry-ready
            competencies.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The teaching-learning process is enhanced through <strong>smart classrooms</strong>, <strong>high-speed internet</strong>,
            and <strong>state-of-the-art multimedia tools</strong>. Our dedicated faculty members bring extensive academic
            and industry experience to ensure a holistic learning environment.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Students benefit from <strong>experiential learning</strong>, <strong>industry collaborations</strong>, and <strong>research
            opportunities</strong> that empower them for leadership roles in the corporate world. Our department
            emphasizes <strong>real-world problem-solving</strong>, <strong>business strategy development</strong>, and <strong>entrepreneurial
            thinking</strong>.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img
              src={banner}
              alt="Department Overview"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 ">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 text-white p-4 rounded-md text-center shadow-md">
            BUSINESS ADMINISTRATION
          </h2>

          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Staff Details",
              "Placement Cell",
              "Programs Offered",
              "Department Events",
              "Publications",
              "Syllabus",
              "Board of Studies Members",
            ].map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a
                  href="#"
                  className="text-blue-700 font-medium block px-4 py-2 rounded-md hover:bg-blue-100 hover:text-blue-900 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Radio Enabled Learning */}
          <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-white">Radio Enabled Learning</h3>
            <p className="text-gray-200 mt-2">Live Streams Available</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900 border-b-2 border-blue-500 pb-2">Facilities</h3>
            <img
              src={logo}
              alt="Smart Learning Center"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Multi-Signal WiFi Integration and Installation of Elite Smart Learning Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
