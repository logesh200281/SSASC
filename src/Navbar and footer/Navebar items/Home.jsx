import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, UserCheck, Activity, GraduationCap } from "lucide-react";
import sankaraImg from "../../assets/image/download.jpg";
import College from "../../assets/image/college.jpeg";
import conferenceImg from "../../assets/image/seminar.jpg";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import videoBg from "../../assets/image/collegeAD.mp4";
import bgImage from "../../assets/image/download.jpg";



const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const navigationLinks = [
  { title: "Courses", icon: <BookOpen size={32} className="text-blue-600" />, link: "/courses" },
  { title: "Admission", icon: <UserCheck size={32} className="text-green-600" />, link: "/admission" },
  { title: "Activities", icon: <Activity size={32} className="text-red-600" />, link: "/activities" },
  { title: "Academics", icon: <GraduationCap size={32} className="text-purple-600" />, link: "/academics" },
];

const Home = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setOffset({ x, y });
  };

  const cards = [
    {
      title: "Conference & Seminar",
      buttonColor: "text-blue-900",
      bgColor: "bg-blue-900",
      bgImage: conferenceImg,
    },
    {
      title: "Campus Life @ Sankara",
      buttonColor: "text-purple-900",
      bgColor: "bg-purple-900",
      bgImage: College,
    },
  ];


  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <motion.div
          className="relative z-10 text-center px-6"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 drop-shadow-md">
            Sri Sankara Arts and Science College
          </h1>
          <p className="text-xl sm:text-2xl drop-shadow-md mt-4">Your Future Starts Here.</p>
          <motion.div whileHover={{ scale: 1.1 }} className="mt-6">
            <Link
              to="/admission"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300"
            >
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {navigationLinks.map((nav, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg group"
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={nav.link} className="flex flex-col items-center space-y-3">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="p-1 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 group-hover:shadow-2xl"
                >
                  <div className="p-4 bg-white rounded-full">{nav.icon}</div>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900">{nav.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex-1 bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 px-10 py-16 relative overflow-hidden">
            <img
              src={sankaraImg}
              alt="Lord Sankara"
              className="absolute bottom-0 left-0 h-full object-contain opacity-90"
              loading="lazy"
            />
            <div className="relative z-10 ml-0 md:ml-[300px] max-w-xl">
              <h2 className="text-xl font-medium text-gray-700 mb-1">Welcome to</h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Sankara College</h1>
              <p className="text-gray-800 mb-6">
                Kancheepuram, one of the Seven Mokshapuris, has been blessed by the great ascetic preceptor Lord Sankara — in the guise of Sri Sankara Bhagavadpada — who established the Sarvagna Peeta to foster Sanatana Dharma.
              </p>
              <Link to="/About">
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition font-medium shadow-md">
                  View More
                </button>
              </Link>

            </div>
          </div>
          <div className="w-full md:w-[35%] bg-purple-900 px-6 py-10 text-white flex flex-col items-center">
            <img
              src={College}
              alt="Consumer Awareness Event"
              className="w-full h-48 object-cover rounded-lg mb-6 shadow-lg"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-center mb-3">
              Sri sankara arts and science college <br /> Campus
            </h3>
            <Link to="/About"
             className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300 text-sm font-medium"
              >
                Read More
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Latest News & Events */}
      <motion.div className="container mx-auto px-6 py-12" variants={fadeInUp} initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Latest News & Events</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {["01", "02", "03", "04"].map((num, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                className={`relative rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-500 ${
                  isActive ? "flex-[3] p-6" : "flex-[1] p-4"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className="absolute inset-0 bg-cover"
                  style={{
                    backgroundImage: `url(${bgImage})`,
                    opacity: isActive ? 0.3 : 0.4,
                  }}
                />
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-bold text-gray-800">Event {num}</h4>
                  {isActive ? (
                    <motion.div className="mt-4 text-gray-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <p>Details about Event {num} go here.</p>
                      <Link to="/gallery" className="text-blue-600 hover:underline mt-2 block">
                        Read More
                      </Link>
                    </motion.div>
                  ) : (
                    <div className="h-40" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>


      {/* Campus Life Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[400px] w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer group"
          >
            <img
              src={card.bgImage}
              alt={card.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
            />
            <div className={`absolute inset-0 ${card.bgColor} opacity-70 z-10`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 text-white">
              <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
              <button
                className={`mt-2 w-12 h-12 text-xl font-semibold rounded-full border-2 border-white flex items-center justify-center bg-white/20 hover:bg-white hover:${card.buttonColor} transition`}
              >
                ➤
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Circular & Announcement Section */}
      <div
  className="relative bg-fixed bg-center bg-no-repeat bg-cover"
  style={{ backgroundImage: `url(${College})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative z-10 grid md:grid-cols-2 gap-10 px-6 md:px-16 py-16">
    {/* Circular Section */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-xl border"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">📜 Circular</h2>
        <div className="flex gap-2">
          <button className="p-1 border rounded text-gray-400 hover:text-black transition">
            <ChevronLeft size={16} />
          </button>
          <button className="p-1 border rounded text-gray-400 hover:text-black transition">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-md font-semibold text-gray-900 uppercase mb-2 tracking-wide">
          RADIO ENABLED LEARNING PROGRAMME / ONLINE CLASSES
        </h3>
        <p className="text-gray-700 mb-3 text-sm leading-relaxed">
          Radio Enabled Learning Programme (REL) /Online classes will commence from 01 July 2020.
        </p>
        <Link to="/media"
            className="text-sm text-blue-700 font-medium hover:underline inline-flex items-center"
            >
           Read More <ChevronRight size={14} className="ml-1" />
        </Link>
      </div>
    </motion.div>

    {/* Announcement Section */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-xl border"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">📢 Announcement</h2>
        <div className="flex flex-col gap-1">
          <button className="p-1 border rounded text-gray-400 hover:text-black transition">
            <ChevronUp size={16} />
          </button>
          <button className="p-1 border rounded text-gray-400 hover:text-black transition">
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-4 border-t pt-4">
        <p className="text-sm text-gray-800 leading-relaxed">
          சமூக வானொலிகளின் ஒலிபரப்பு விடிகளைப் பற்றி பின்னரும் கலையியல் குறுந்தகட்கள் நிலைகளின் சொற்தொகுப்பு பதிப்பாகும்
        </p>
        <p className="text-sm text-gray-800 leading-relaxed">
          மாணவர்கள் இந்தக் கல்லூரியில் Radio enabled Learning (வானொலி இயக்கக் கல்லி) சேரும்போது
          பயன்படுத்திட... மின்னஞ்சல் முகவரி மற்றும் அனலை செலவென்கின்ற பயன்பாட்டுத் தொகை.
        </p>
        <p className="text-sm text-gray-800 leading-relaxed">
          “Diploma in Community Radio & Mass Communication” Radio Enabled Learning
        </p>
      </div>
    </motion.div>
  </div>
</div>
    </div>
  );
};

export default Home;