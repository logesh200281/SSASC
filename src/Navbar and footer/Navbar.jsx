/* eslint-disable react/prop-types */
"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu as MenuIcon,
  X as CloseIcon,
  Home,
  Info,
  BookOpen,
  Users,
  Camera,
  Contact,
  Code,
} from "lucide-react";
import logo from "../assets/image/entitylogo.gif";
import image12 from "../assets/image/12.jpg";
import image13 from "../assets/image/naac-img.png";
import image14 from "../assets/image/iso-img.png";

// Framer Motion config
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
};

const HoveredLink = ({ children, to, className = "", icon }) => (
  <Link
    to={to}
    className={`group relative flex items-center gap-2 px-3 py-1.5 text-sm md:text-base text-white rounded-md font-medium transition duration-200
      before:absolute before:inset-0 before:rounded-md before:border before:border-yellow-300 before:scale-0 before:opacity-0
      before:transition-transform before:duration-300 before:ease-in-out
      hover:before:scale-100 hover:before:opacity-100 hover:text-yellow-300
      ${className}`}
  >
    {icon && <span>{icon}</span>}
    {children}
  </Link>
);

const DepartmentItem = ({ title, to }) => (
  <Link
    to={`/department/${to.toLowerCase().replace(/\s+/g, "-")}`}
    className="block bg-white text-center px-4 py-2 text-sm md:text-base text-blue-900 font-semibold rounded-lg shadow transition-all hover:bg-blue-200 ring-1 ring-transparent hover:ring-blue-400 hover:ring-offset-2 hover:ring-offset-white hover:drop-shadow-md"
  >
    {title}
  </Link>
);

const departments = [
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
];

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);

  return (
    <>
      {/* Top Logo and Accreditation Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 w-full shadow-md">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4">
          <Link to="/" className="flex items-center gap-4 w-full md:w-auto">
            <img src={logo} alt="Logo" className="h-16 md:h-20 rounded-full shadow-md" />
            <div className="text-white text-sm md:text-lg font-bold leading-tight">
              Sri Sankara Arts & Science College
              <div className="text-xs font-light leading-snug">
                Affiliated to University of Madras <br /> Enathur, Kanchipuram - 631 561
              </div>
            </div>
          </Link>

          {/* Accreditations */}
          <div className="flex flex-wrap gap-2 items-center justify-center md:justify-end w-full md:w-auto">
            {[image13, image14, image12].map((img, idx) => (
              <img key={idx} src={img} alt="Badge" className="h-16 w-auto rounded shadow-md" />
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex justify-start w-full">
          <button className="text-white border-2 border-yellow-400 rounded-md p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
          {mobileMenuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
          </div>

        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 md:sticky top-0 z-50 shadow-md w-full">
        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-between items-center py-3 max-w-7xl mx-auto px-6">
          <ul className="flex gap-1 text-white font-medium items-center">
            <li><HoveredLink to="/" icon={<Home size={20} />}>Home</HoveredLink></li>
            <li><HoveredLink to="/about" icon={<Info size={20} />}>About</HoveredLink></li>

            {/* Departments Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActive("Departments")}
              onMouseLeave={() => setActive(null)}
            >
              <HoveredLink to="/Department" icon={<Users size={20} />} className="cursor-pointer">
                Departments
              </HoveredLink>
              <AnimatePresence>
                {active === "Departments" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={transition}
                    className="absolute left-0 mt-2 z-50"
                  >
                    <div className="bg-opacity-900 bg-white  backdrop-white rounded-xl shadow-2xl p-4 w-80 grid grid-cols-2 gap-2">

                      {departments.map((dept, i) => (
                        <DepartmentItem key={i} title={dept} to={dept} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Other Pages */}
            {[
              { name: "Courses", icon: <BookOpen size={20} /> },
              { name: "Admission", icon: <Users size={20} /> },
              { name: "Activities", icon: <Camera size={20} /> },
              { name: "Academics", icon: <Code size={20} /> },
              { name: "Media", icon: <Camera size={20} /> },
              { name: "NIRF", icon: <Info size={20} /> },
              { name: "Gallery", icon: <Camera size={20} /> },
              { name: "Contact", icon: <Contact size={20} /> },
            ].map(({ name, icon }) => (
              <li key={name}><HoveredLink to={`/${name.toLowerCase()}`} icon={icon}>{name}</HoveredLink></li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={transition}
              className="md:hidden overflow-hidden bg-blue-900 text-white px-6 py-4 w-full"
            >
              <ul className="flex flex-col gap-4">
                <HoveredLink to="/" icon={<Home size={20} />} className="block">Home</HoveredLink>
                <HoveredLink to="/about" icon={<Info size={20} />} className="block">About</HoveredLink>

                {/* Mobile Departments Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileDeptOpen(!mobileDeptOpen)}
                    className="w-full text-left flex items-center gap-2 font-semibold"
                  >
                    <Users size={20} /> Departments
                  </button>
                  {mobileDeptOpen && (
                    <div className="mt-2 pl-4 grid gap-1">
                      {departments.map((dept, i) => (
                        <DepartmentItem key={i} title={dept} to={dept} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Remaining Links */}
                {[
                  { name: "Courses", icon: <BookOpen size={20} /> },
                  { name: "Admission", icon: <Users size={20} /> },
                  { name: "Activities", icon: <Camera size={20} /> },
                  { name: "Academics", icon: <Code size={20} /> },
                  { name: "Media", icon: <Camera size={20} /> },
                  { name: "NIRF", icon: <Info size={20} /> },
                  { name: "Gallery", icon: <Camera size={20} /> },
                  { name: "Contact", icon: <Contact size={20} /> },
                ].map(({ name, icon }) => (
                  <HoveredLink key={name} to={`/${name.toLowerCase()}`} icon={icon} className="block">
                    {name}
                  </HoveredLink>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
