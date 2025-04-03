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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Biotechnology Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Biotechnology focuses on advancing biological sciences through innovation, 
            research, and technology-driven solutions. Our curriculum integrates molecular biology, 
            genetics, and bioinformatics with hands-on laboratory experience.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The department is equipped with **state-of-the-art laboratories**, **advanced genetic research 
            facilities**, and **modern computational biology tools** to foster excellence in biotechnology 
            education and research.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Students gain expertise in **genetic engineering**, **bioprocessing**, and **biomedical 
            research**, preparing them for careers in pharmaceuticals, healthcare, agriculture, and 
            environmental biotechnology.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Biotechnology Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-green-700 p-3 rounded-md text-center">
            BIOTECHNOLOGY DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty Members",
              "Research & Innovations",
              "Biotech Laboratories",
              "Programs Offered",
              "Department Events",
              "Industry Collaborations",
              "Internship & Career Opportunities",
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
            <h3 className="text-lg font-bold text-green-800">Genomic & Biomedical Research</h3>
            <p className="text-gray-700 mt-2">Advancing Biotechnology through Innovation</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Laboratory & Research Facilities</h3>
            <img 
              src={logo} 
              alt="Advanced Biotechnology Lab"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Equipped with **cell culture labs, gene sequencing tools, and bioinformatics software** 
              for advanced biotechnology research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
