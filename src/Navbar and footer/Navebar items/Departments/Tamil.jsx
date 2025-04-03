/* eslint-disable react/no-unescaped-entities */
import logo from "../../../assets/image/entitylogo.gif";
import banner from "../../../assets/image/LOGO.png";



const AboutDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="text-red-900 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Department of Tamil</h1>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content (Main Description) */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-red-900 mb-4">About the Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Tamil is committed to preserving and promoting the beauty and richness 
            of the Tamil language and literature. Our curriculum encompasses Tamil literature, 
            linguistics, cultural studies, and heritage courses that provide students with a 
            profound understanding of the language.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The department offers courses on **Classical Tamil Literature, Modern Tamil Literature, 
            Tamil Culture, and Translation Studies**, fostering a deep appreciation for the language's 
            historical and contemporary significance.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With a blend of traditional teaching methods and modern technological tools, we emphasize 
            **Tamil literary research, archaeology, and language development**, preparing students 
            for academic and professional excellence.
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
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-red-700 p-3 rounded-md text-center">
            Tamil Department
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "History of the Department",
              "Courses Offered",
              "Faculty Members",
              "Research Programs",
              "Tamil Literary Club",
              "Publications",
              "Syllabus",
              "Special Events",
            ].map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a href="#" className="text-red-700 font-medium hover:text-red-900 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Research Highlights */}
          <div className="mt-6 bg-red-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-red-800">Tamil Research Center</h3>
            <p className="text-gray-700 mt-2">Focused on Tamil Archaeology & Classical Literature</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Tamil Literary Library</h3>
            <img 
              src={logo} 
              alt="Tamil Library"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              A collection of ancient Tamil literature, rare manuscripts, and research publications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
