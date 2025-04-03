import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, UserCheck, Activity, GraduationCap } from "lucide-react";
import videoBg from "../../assets/image/collegeAD.mp4";
import collegeImage from "../../assets/image/LOGO.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const navigationLinks = [
  { title: "Courses", icon: <BookOpen size={32} className="text-blue-600"/>, link: "/courses" },
  { title: "Admission", icon: <UserCheck size={32} className="text-green-600" />, link: "/admission" },
  { title: "Activities", icon: <Activity size={32} className="text-red-600"/>, link: "/activities" },
  { title: "Academics", icon: <GraduationCap size={32} className="text-purple-600" />, link: "/academics" }
];

const Home = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setOffset({ x, y });
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden" onMouseMove={handleMouseMove}>
        <video className="absolute inset-0 w-full h-full min-h-screen object-cover" src={videoBg} autoPlay loop muted playsInline></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          className="relative z-10 text-center px-4 sm:px-8 md:px-16"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          initial="hidden" animate="visible" variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold mb-4 sm:text-5xl md:text-6xl drop-shadow-md">
            Sri Sankara Arts and Science College
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl drop-shadow-md mt-4">
            Your Future Starts Here.
          </p>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="mt-6">
            <Link to="/admission" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out">
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {navigationLinks.map((nav, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-lg shadow-lg transition duration-300 group"
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-30 group-hover:opacity-100 transition duration-300 rounded-lg"
              ></motion.div>

              <Link to={nav.link} className="relative flex flex-col items-center space-y-3 z-10">
                <motion.div 
                  whileHover={{ scale: 1.2 }} 
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-full bg-white shadow-lg group-hover:shadow-2xl"
                >
                  {nav.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900">{nav.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Latest News & Events */}
      <motion.div className="container mx-auto px-6 py-12 " variants={fadeInUp} initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Latest News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["01", "02", "03", "04"].map((num) => (
            <motion.div key={num} className="bg-white p-6 rounded-lg shadow-lg border text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h4 className="text-xl font-semibold text-gray-800">Event {num}</h4>
              <p className="text-gray-600 mt-2">Details about the event...</p>
              <Link to="#" className="text-blue-600 hover:underline mt-3 block">Read More</Link>
            </motion.div>
            
          ))}
        </div>
      </motion.div>

      {/* Campus Life */}
      <motion.div className="container mx-auto px-6 py-12" variants={fadeInUp} initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Campus Life @ Sankara</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <motion.img src={collegeImage} alt="Campus" className="w-full md:w-1/3 rounded-lg shadow-md" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
          <p className="text-gray-700 text-lg text-center md:text-left">
            Experience a dynamic learning environment with excellent faculty, smart classrooms, and industry-focused curriculum.
          </p>
        </div>
      </motion.div>

      {/* Circulars & Announcements */}
      <motion.div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeInUp} initial="hidden" whileInView="visible">
        <motion.div className="bg-white p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Circular</h3>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              <Link to="#" className="text-blue-600 hover:underline">Circular regarding new admissions - March 2025</Link>
            </li>
          </ul>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Announcement</h3>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              <Link to="#" className="text-blue-600 hover:underline">College fest scheduled for April 2025</Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
