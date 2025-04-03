
import  { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/entitylogo.gif";
import image12 from "../assets/image/12.jpg";
import image13 from "../assets/image/naac-img.png";
import image14 from "../assets/image/iso-img.png";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  const closeNavbar = () => setIsNavbarOpen(false);

  // Dropdown handlers
  const handleDepartmentEnter = () => setIsDepartmentOpen(true);
  const handleDepartmentLeave = () => setIsDepartmentOpen(false);

  // Close navbar when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sticky top-0 z-50 shadow-xl bg-opacity-90 backdrop-blur-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">

        {/* Logo and College Name */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto rounded-full shadow-lg" />
            <div className="text-white text-lg md:text-xl font-extrabold tracking-wide">
              Sri Sankara Arts & Science College
              <br />
              <span className="text-sm md:text-base font-light">Afflliated to University of Madras</span> <br/>
              <span className="text-sm md:text-base font-light">Enathur, Kanchipuram - 631 561</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="md:hidden text-white text-3xl font-bold">
          {isNavbarOpen ? "✕" : "☰"}
        </button>

        {/* Accreditation & Certifications */}
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <img src={image13} alt="NAAC" className="h-10 md:h-16 w-auto shadow-lg rounded-lg" />
          <img src={image14} alt="ISO" className="h-10 md:h-16 w-auto shadow-lg rounded-lg" />
          <img src={image12} alt="Accreditation" className="h-10 md:h-16 w-auto shadow-lg rounded-lg" />
        </div>
      </div>

      {/* Navigation Menu */}
      <ul ref={menuRef} className={`flex flex-col md:flex-row md:items-center bg-blue-900 md:bg-transparent md:space-x-6 w-full md:w-auto transition-all duration-300 ease-in-out ${isNavbarOpen ? "block" : "hidden md:flex"}`}>

        {/* Home */}
        <li className="py-2 text-center md:py-0">
          <Link to="/" onClick={closeNavbar} className="block py-3 px-5 rounded-lg transition duration-300 hover:bg-blue-800 md:hover:bg-white md:hover:text-blue-900 shadow-md md:shadow-none">
            Home
          </Link>
        </li>

        {/* About */}
        <li className="py-2 text-center md:py-0">
          <Link to="/about" onClick={closeNavbar} className="block py-3 px-5 rounded-lg transition duration-300 hover:bg-blue-800 md:hover:bg-white md:hover:text-blue-900 shadow-md md:shadow-none">
            About
          </Link>
        </li>

        {/* Department Dropdown */}
        <li className="relative group" onMouseEnter={handleDepartmentEnter} onMouseLeave={handleDepartmentLeave}>
          <Link to="/Department" className="block text-center py-3 px-5 rounded-lg transition duration-300 hover:bg-blue-800 md:hover:bg-white md:hover:text-blue-900 shadow-md md:shadow-none">
            Departments
          </Link>

          {/* Dropdown Menu */}
          <ul className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white text-blue-900 shadow-lg rounded-lg overflow-y-auto max-h-64 transition-all duration-300 ${isDepartmentOpen ? "block" : "hidden"}`}>
            {[
              "Biochemistry",
              "Biotechnology",
              "Business Administration",
              "Commerce",
              "Computer Science",
              "English",
              "Mathematics",
              "Microbiology",
              "Physical Education",
              "Physics",
              "Sanskrit",
              "Tamil",
              "IQAC",
              "Library",
            ].map((dept, idx) => (
              <li key={idx} className="border-b last:border-none">
                <Link to={`/department/${dept.toLowerCase().replace(/\s+/g, "-")}`} onClick={closeNavbar} className="block px-5 py-3 hover:bg-blue-800 hover:text-white transition duration-300">
                  {dept}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Other Navigation Items */}
        {["Courses", "Admission", "Activities", "Academics", "Media", "NIRF", "Gallery", "Contact"].map((item, index) => (
          <li key={index} className="py-2 text-center md:py-0">
            <Link to={`/${item.toLowerCase()}`} onClick={closeNavbar} className="block py-3 px-5 rounded-lg transition duration-300 hover:bg-blue-800 md:hover:bg-white md:hover:text-blue-900 shadow-md md:shadow-none">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
