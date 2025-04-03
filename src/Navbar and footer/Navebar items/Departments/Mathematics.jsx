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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Mathematics Department</h2>
          <p className="text-gray-700 leading-relaxed">
            The Department of Mathematics is dedicated to fostering **analytical thinking, problem-solving, 
            and logical reasoning** through a comprehensive curriculum. We aim to develop a strong foundation 
            in both pure and applied mathematics.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our faculty members specialize in **algebra, calculus, statistics, differential equations, and mathematical modeling**. 
            The department encourages students to explore **theoretical concepts, computational techniques, and real-world applications**.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With a focus on **research, innovation, and interdisciplinary learning**, our students are well-prepared 
            for careers in **academia, data science, finance, engineering, and technology**.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="Mathematics Department"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-indigo-700 p-3 rounded-md text-center">
            MATHEMATICS DEPARTMENT
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "About the Department",
              "Faculty Members",
              "Research & Publications",
              "Mathematics Club",
              "Programs Offered",
              "Workshops & Seminars",
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

          {/* Research & Problem-Solving Focus */}
          <div className="mt-6 bg-indigo-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-indigo-800">Mathematical Research & Applications</h3>
            <p className="text-gray-700 mt-2">Exploring Mathematical Theories & Computational Methods</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Mathematical Computing Lab</h3>
            <img 
              src={logo} 
              alt="Mathematics Department Resources"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Equipped with **Mathematical Software, Computational Tools, and Data Analysis Resources**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
