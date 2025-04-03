

const Sidebar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold border-b pb-2 mb-2">Media</h2>
      <ul className="text-blue-500 space-y-2">
        <li><a href="#">Events</a></li>
        <li><a href="#">Conference Sessions</a></li>
        <li><a href="#">Archives</a></li>
        <li><a href="#">Radio Enabled Learning</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
