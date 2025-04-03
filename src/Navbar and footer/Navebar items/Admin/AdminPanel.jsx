import  { useState } from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

const AdminPanel = () => {
  const [selectedPage, setSelectedPage] = useState("news");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded admin credentials
  const ADMIN_EMAIL = "admin@sankara.com";
  const ADMIN_PASSWORD = "sankara123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 shadow-md rounded">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <nav className="mt-4">
          <ul>
            <li
              className={`p-2 cursor-pointer ${selectedPage === "news" ? "bg-blue-700" : ""}`}
              onClick={() => setSelectedPage("news")}
            >
              News
            </li>
            <li
              className={`p-2 cursor-pointer ${selectedPage === "gallery" ? "bg-blue-700" : ""}`}
              onClick={() => setSelectedPage("gallery")}
            >
              Gallery
            </li>
            <li
              className={`p-2 cursor-pointer ${selectedPage === "courses" ? "bg-blue-700" : ""}`}
              onClick={() => setSelectedPage("courses")}
            >
              Courses
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {selectedPage === "add" ? (
          <AddItem setSelectedPage={setSelectedPage} selectedType="courses" />
        ) : (
          <ItemList selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
      </main>
    </div>
  );
};

export default AdminPanel;