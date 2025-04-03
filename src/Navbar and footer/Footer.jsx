import  { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Footer = () => {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const currentYear = new Date().getFullYear();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const firstDay = new Date(currentYear, monthIndex, 1).getDay();
  const totalDays = new Date(currentYear, monthIndex + 1, 0).getDate();
  
  let daysArray = Array(firstDay).fill("");
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push(i);
  }

  return (
    <footer className="bg-white py-10 border-t border-gray-200 mt-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-3 border-b-2 border-blue-600 inline-block">Quick Links</h3>
          <ul className="text-gray-700 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Academics", path: "/academics" },
              { name: "Admission", path: "/admission" },
              { name: "Courses", path: "/courses" },
              { name: "Gallery", path: "/gallery" },
              { name: "NIRF", path: "/nirf" },
              { name: "About Us", path: "/about" },
              { name: "Activities", path: "/activities" },
              { name: "Contact Us", path: "/contact" },
              { name: "Departments", path: "/departments" },
              { name: "Media", path: "/media" }
            ].map((link, index) => (
              <li key={index} className="hover:text-blue-600 cursor-pointer transition">
                <Link to={link.path} className="text-gray-700 hover:underline">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-3 border-b-2 border-blue-600 inline-block">Contact Us</h3>
          <p className="text-gray-700">
            <strong>Sri Sankara Arts & Science College</strong> (Autonomous)
            <br />
            Enathur, Kancheepuram - 631561
            <br />
            <strong>Phone:</strong> 044 - 27264066
            <br />
            <strong>Fax:</strong> 044 - 27264066
            <br />
            <strong>Email:</strong> <a href="mailto:admin@sankaracollege.edu.in" className="text-blue-600 hover:underline">admin@sankaracollege.edu.in</a>
            <br />
            <strong>Website:</strong> <a href="https://sankaracollege.edu.in" className="text-blue-600 hover:underline">sankaracollege.edu.in</a>
          </p>
        </div>

        {/* Calendar Section */}
        <div>
          <h3 className="text-lg font-bold mb-3 border-b-2 border-blue-600 inline-block">{months[monthIndex]} {currentYear}</h3>
          <div className="border rounded-lg p-4 shadow-md bg-gray-50">
            <div className="flex justify-between items-center text-gray-800 mb-2">
              <button 
                onClick={() => setMonthIndex((monthIndex - 1 + 12) % 12)} 
                className="p-1 rounded-full bg-gray-300 hover:bg-gray-400"
              >
                &lt;
              </button>
              <span className="font-semibold">{months[monthIndex]} {currentYear}</span>
              <button 
                onClick={() => setMonthIndex((monthIndex + 1) % 12)} 
                className="p-1 rounded-full bg-gray-300 hover:bg-gray-400"
              >
                &gt;
              </button>
            </div>

            <div className="grid grid-cols-7 text-center font-semibold text-gray-700 border-b pb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="py-1">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 text-center mt-2 text-gray-800">
              {daysArray.map((date, index) => (
                <div key={index} className={`py-2 ${date === new Date().getDate() && monthIndex === new Date().getMonth() ? "bg-purple-700 text-white rounded-full px-2" : ""}`}>
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {currentYear} SSASC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
