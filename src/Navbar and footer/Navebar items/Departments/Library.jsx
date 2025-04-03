import logo from "../../../assets/image/entitylogo.gif";
import banner from "../../../assets/image/LOGO.png";



const AboutDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="text-green-900 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Library</h1>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content (Main Description) */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-900 mb-4">About the Library</h2>
          <p className="text-gray-700 leading-relaxed">
            The **Library** serves as the **knowledge hub** of the institution, offering a vast collection 
            of books, journals, research papers, and digital resources to support **academic and research activities**. 
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our library is equipped with a **digital catalog, reading spaces, high-speed internet, 
            and e-learning resources** to provide students and faculty with access to global knowledge networks.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The library promotes **intellectual curiosity and lifelong learning** by providing resources for 
            **all disciplines**, including **science, arts, commerce, and technology**. Students can explore 
            **reference materials, research databases, and online journals** to enhance their academic pursuits.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Library"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-green-700 p-3 rounded-md text-center">
            LIBRARY RESOURCES
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Library",
              "Digital Resources",
              "E-Journals & Databases",
              "Book Catalogue",
              "Research & Reference Section",
              "Library Services",
              "Rules & Regulations",
              "Library Staff",
            ].map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a href="#" className="text-green-700 font-medium hover:text-green-900 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Digital Library Section */}
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-green-800">Digital Learning & Research</h3>
            <p className="text-gray-700 mt-2">Access to Online Journals, E-Books, and Digital Archives</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Modern Library Facilities</h3>
            <img 
              src={logo} 
              alt="Library Resources"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              State-of-the-art **reading areas, digital catalogs, and advanced research facilities**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
