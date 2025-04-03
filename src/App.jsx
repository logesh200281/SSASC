import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar and footer/Navbar";
import Footer from "./Navbar and footer/Footer";
import Home from "./Navbar and footer/Navebar items/Home";
import About from './Navbar and footer/Navebar items/About';
import Department from './Navbar and footer/Navebar items/Department';
import Courses from './Navbar and footer/Navebar items/Courses';
import Admission from './Navbar and footer/Navebar items/Admission';
import Activities from './Navbar and footer/Navebar items/Activities';
import Academics from './Navbar and footer/Navebar items/Academics';
import Media from './Navbar and footer/Navebar items/Media';
import NIRF from './Navbar and footer/Navebar items/NIRF';
import Gallery from './Navbar and footer/Navebar items/Gallery';
import Contact from './Navbar and footer/Navebar items/Contact';
import Apply from './Navbar and footer/Navebar items/Apply';
import AdminPanel from "./Navbar and footer/Navebar items/Admin/AdminPanel";

// Department Imports
import BusinessAdministration from './Navbar and footer/Navebar items/Departments/Business Administration';
import Biochemistry from "./Navbar and footer/Navebar items/Departments/Biochemistry";
import Biotechnology from "./Navbar and footer/Navebar items/Departments/Biotechnology";
import Commerce from "./Navbar and footer/Navebar items/Departments/Commerce";
import ComputerScience from "./Navbar and footer/Navebar items/Departments/Computer Science";
import English from "./Navbar and footer/Navebar items/Departments/English";
import Mathematics from "./Navbar and footer/Navebar items/Departments/Mathematics";
import Microbiology from "./Navbar and footer/Navebar items/Departments/Microbiology";
import PhysicalEducation from "./Navbar and footer/Navebar items/Departments/Physical Education";
import Physics from "./Navbar and footer/Navebar items/Departments/Physics";
import Sanskrit from "./Navbar and footer/Navebar items/Departments/Sanskrit";
import Tamil from "./Navbar and footer/Navebar items/Departments/Tamil";
import IQAC from "./Navbar and footer/Navebar items/Departments/IQAC";
import Library from "./Navbar and footer/Navebar items/Departments/Library";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Department />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/media" element={<Media />} />
        <Route path="/nirf" element={<NIRF />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/admin" element={<AdminPanel />} />
        {/* Department Routes */}
        <Route path="/department/business-administration" element={<BusinessAdministration />} />
        <Route path="/department/biochemistry" element={<Biochemistry />} />
        <Route path="/department/biotechnology" element={<Biotechnology />} />
        <Route path="/department/commerce" element={<Commerce />} />
        <Route path="/department/computer-science" element={<ComputerScience />} />
        <Route path="/department/english" element={<English />} />
        <Route path="/department/mathematics" element={<Mathematics />} />
        <Route path="/department/microbiology" element={<Microbiology />} />
        <Route path="/department/physical-education" element={<PhysicalEducation />} />
        <Route path="/department/physics" element={<Physics />} />
        <Route path="/department/sanskrit" element={<Sanskrit />} />
        <Route path="/department/tamil" element={<Tamil />} />
        <Route path="/department/iqac" element={<IQAC />} />
        <Route path="/department/library" element={<Library />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
