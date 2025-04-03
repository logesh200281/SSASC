import logo from "../../../assets/image/entitylogo.gif";
import banner from "../../../assets/image/LOGO.png";



const AboutDepartment = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="text-green-900 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Internal Quality Assurance Cell (IQAC)</h1>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content (Main Description) */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-900 mb-4">About IQAC</h2>
          <p className="text-gray-700 leading-relaxed">
            The Internal Quality Assurance Cell (IQAC) is established to ensure the continuous 
            improvement of academic and administrative performance in the institution. It promotes 
            a culture of quality enhancement and best practices in education.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            IQAC plays a vital role in monitoring and enhancing the **teaching-learning process**, 
            **research initiatives**, **student support services**, and **infrastructure development**. 
            It ensures that the institution meets accreditation and assessment standards.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our IQAC framework emphasizes **stakeholder involvement, continuous evaluation, and 
            strategic planning** to achieve excellence in education. Various initiatives such as 
            **faculty development programs, quality audits, and student feedback mechanisms** are 
            actively conducted.
          </p>

          {/* Image Section */}
          <div className="mt-6">
            <img 
              src={banner} 
              alt="IQAC Overview"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Sidebar Header */}
          <h2 className="text-xl font-bold text-white bg-green-700 p-3 rounded-md text-center">
            IQAC - Quality Assurance
          </h2>
          
          {/* Sidebar Links */}
          <ul className="mt-4 space-y-3">
            {[
              "IQAC Vision & Mission",
              "Objectives & Strategies",
              "Accreditation & Assessment",
              "Quality Initiatives",
              "Faculty Development Programs",
              "Student Feedback System",
              "Annual Reports",
              "Best Practices",
            ].map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a href="#" className="text-green-700 font-medium hover:text-green-900 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Quality Assurance Highlights */}
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-lg font-bold text-green-800">Accreditation & Quality Standards</h3>
            <p className="text-gray-700 mt-2">Ensuring Excellence in Higher Education</p>
          </div>

          {/* Facilities Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-900">Quality Monitoring System</h3>
            <img 
              src={logo} 
              alt="IQAC System"
              className="w-full mt-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
            <p className="text-gray-700 mt-2">
              Advanced monitoring tools to track academic and administrative progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
