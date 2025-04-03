import logo from "../../../assets/image/entitylogo.gif";
import banner from "../../../assets/image/LOGO.png";



const AboutDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="text-purple-900 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">About the Department</h1>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content (Main Description) */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Physics Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Physics is committed to fostering **scientific curiosity, analytical skills, 
            and research excellence**. Our curriculum is designed to provide students with a **strong 
            foundation in theoretical and experimental physics**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our faculty includes **renowned physicists and researchers** who guide students through **advanced 
            topics like quantum mechanics, electromagnetism, thermodynamics, and astrophysics**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Students have access to **well-equipped laboratories, computational physics tools, and research 
            collaborations** with reputed institutions, enabling them to explore **cutting-edge innovations** 
            in the field.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Physics Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-purple-700 p-3 rounded-md text-center">
            PHYSICS DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty Members",
              "Research & Publications",
              "Laboratory Facilities",
              "Programs & Courses",
              "Physics Club & Events",
              "Syllabus & Curriculum",
              "Board of Studies Members",
            ].map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a href="#" className="text-purple-700 font-medium hover:text-purple-900 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Research Highlights */}
          <div className="mt-6 bg-purple-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-purple-800">Research in Modern Physics</h3>
            <p className="text-gray-700 mt-2">Quantum Mechanics, Nanotechnology & Astrophysics</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">State-of-the-Art Laboratories</h3>
            <img 
              src={logo} 
              alt="Physics Lab"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Equipped with **Optics, Nanotechnology, and Computational Physics Labs** for hands-on 
              experimentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
