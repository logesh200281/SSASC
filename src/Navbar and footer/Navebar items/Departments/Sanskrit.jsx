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
          <h2 className="text-3xl font-bold text-red-900 mb-4">Sanskrit Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Sanskrit is dedicated to preserving and promoting the **rich cultural heritage, 
            linguistic excellence, and literary wisdom** of Sanskrit. Our curriculum provides a **deep 
            understanding of classical texts, Vedic literature, and ancient Indian philosophy**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our faculty members are **renowned scholars and researchers** who guide students through **Sanskrit 
            grammar, literary analysis, and philosophical teachings**. We encourage **comparative studies** 
            between Sanskrit and other classical languages.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The department promotes **manuscript preservation, interdisciplinary research, and modern applications** 
            of Sanskrit in computational linguistics, Ayurveda, and historical studies.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Sanskrit Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-red-700 p-3 rounded-md text-center">
            SANSKRIT DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty Members",
              "Research & Publications",
              "Vedic Studies & Texts",
              "Programs & Courses",
              "Sanskrit Literature Club",
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

          {/* Research Highlights */}
          <div className="mt-6 bg-red-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-red-800">Research in Sanskrit Studies</h3>
            <p className="text-gray-700 mt-2">Manuscript Preservation, Ayurveda & Computational Linguistics</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Ancient Text Preservation</h3>
            <img 
              src={logo} 
              alt="Sanskrit Manuscripts"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Digital and physical archives of **rare Sanskrit manuscripts, Vedic scriptures, and philosophical texts**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
