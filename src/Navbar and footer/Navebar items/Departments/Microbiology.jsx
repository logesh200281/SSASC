import logo from "../../../assets/image/entitylogo.gif";
import banner from "../../../assets/image/LOGO.png";



const AboutDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="text-green-900 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">About the Department</h1>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content (Main Description) */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Microbiology Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Microbiology is committed to advancing **biological sciences** through a 
            focus on **microbial research, biotechnology applications, and disease prevention**.  
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our curriculum provides hands-on experience in **microbial identification, genetic analysis, 
            and industrial applications**. Students gain expertise in **immunology, virology, medical microbiology, 
            and environmental microbiology**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Equipped with **state-of-the-art laboratories**, our department fosters **innovation, research, 
            and practical learning**. Students are trained to excel in **healthcare, pharmaceuticals, 
            biotechnology, and research industries**.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Microbiology Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-green-700 p-3 rounded-md text-center">
            MICROBIOLOGY DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty Members",
              "Research & Publications",
              "Microbiology Lab Facilities",
              "Programs Offered",
              "Workshops & Conferences",
              "Syllabus & Curriculum",
              "Board of Studies Members",
            ].map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a href="#" className="text-green-700 font-medium hover:text-green-900 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Research & Lab Focus */}
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-green-800">Advanced Microbiology Research</h3>
            <p className="text-gray-700 mt-2">Exploring Microbial Genetics & Biotechnology Applications</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">State-of-the-Art Microbiology Lab</h3>
            <img 
              src={logo} 
              alt="Microbiology Lab"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Fully equipped with **Microbial Culture Units, Genetic Analysis Tools, and Bioinformatics Resources**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
