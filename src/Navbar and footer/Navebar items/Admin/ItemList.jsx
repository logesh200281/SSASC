/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ItemList = ({ selectedPage, setSelectedPage }) => {
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(selectedPage)) || [];
    setItems(storedItems); // Keep original order
  }, [selectedPage]);

  const handleDelete = (index) => {
    const updatedList = items.filter((_, i) => i !== index);
    localStorage.setItem(selectedPage, JSON.stringify(updatedList));
    setItems(updatedList);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditData(items[index]);
  };

  const handleFeesChange = (field, value) => {
    const updatedFees = {
      ...editData.fees,
      [field]: Number(value) || 0, // Convert value to number
    };
  
    // Correct total calculation
    updatedFees.total =
      (parseFloat(updatedFees.tuition) || 0) +
      (parseFloat(updatedFees.hostel) || 0) ;
  
    setEditData({ ...editData, fees: updatedFees });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData({ ...editData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    const updatedList = [...items];
    updatedList.splice(editingIndex, 1, editData); // Update item at the same index
    localStorage.setItem(selectedPage, JSON.stringify(updatedList));
    setItems(updatedList);
    setEditingIndex(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">
        {selectedPage === "courses" ? "Courses" : selectedPage === "news" ? "News" : "Gallery"}
      </h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setSelectedPage("add")}
      >
        Add New {selectedPage === "courses" ? "Course" : selectedPage === "news" ? "News" : "Gallery Item"}
      </button>

      {items.length > 0 ? (
        items
          .slice() // Create a copy
          .reverse() // Reverse for display only
          .map((item, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded mt-2">
              <div>
                <h3 className="text-lg font-bold">{item.title || item.name}</h3>
                <p className="text-sm text-gray-500">{item.date || item.department}</p>
                <p className="text-sm text-gray-500">{item.degree || ""}</p>
                <p className="text-sm">{item.content || item.program}</p>

                {selectedPage === "courses" && item.fees && (
                  <div className="mt-2">
                    <p className="text-sm"><strong>Semester Fees:</strong> ₹{item.fees.tuition}</p>
                    <p className="text-sm"><strong>Hostel Fees:</strong> ₹{item.fees.hostel}</p>
                    <p className="text-lg font-bold text-blue-600"><strong>Total Fees:</strong> ₹{item.fees.total}</p>
                  </div>
                )}

                {item.image && selectedPage !== "courses" && (
                  <img src={item.image} alt="Item" className="w-20 h-20 mt-2 rounded" />
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
                <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white text-sm px-3 py-1 rounded w-full sm:w-auto">
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white text-sm px-3 py-1 rounded w-full sm:w-auto">
                  Delete
                </button>
              </div>
            </div>
          ))
      ) : (
        <p className="text-gray-500">No items added yet.</p>
      )}

      {/* Edit Form */}
      {editingIndex !== null && (
        <div className="bg-white p-6 shadow-md rounded mt-4">
          <h3 className="text-lg font-bold mb-2">Edit {selectedPage === "courses" ? "Course" : "Item"}</h3>

          {selectedPage !== "courses" && (
            <>
              <input
                type="text"
                placeholder="Title"
                value={editData.title || editData.name || ""}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />
              <label className="block font-semibold mb-1">Upload Image:</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded mb-2" />
              {editData.image && <img src={editData.image} alt="Preview" className="w-32 h-32 rounded shadow-md" />}
            </>
          )}

          {selectedPage === "courses" ? (
            <>
              <input
                type="text"
                placeholder="Department"
                value={editData.department || ""}
                onChange={(e) => setEditData({ ...editData, department: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Degree"
                value={editData.degree || ""}
                onChange={(e) => setEditData({ ...editData, degree: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Program"
                value={editData.program || ""}
                onChange={(e) => setEditData({ ...editData, program: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />

              <label className="block font-semibold mb-1">Fees Structure:</label>
              <input
                type="number"
                placeholder="Semester Fees"
                value={editData.fees?.tuition || 0}
                onChange={(e) => handleFeesChange("tuition", e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="number"
                placeholder="Hostel Fees"
                value={editData.fees?.hostel || 0}
                onChange={(e) => handleFeesChange("hostel", e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="number"
                placeholder="Library Fees"
                value={editData.fees?.library || 0}
                onChange={(e) => handleFeesChange("library", e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <p className="text-lg font-bold text-blue-600">
                Total Fees: ₹{editData.fees?.total || 0}
              </p>
            </>
          ) : (
            <>
              <input
                type="date"
                value={editData.date || ""}
                onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />
              <textarea
                placeholder="Content"
                value={editData.content || ""}
                onChange={(e) => setEditData({ ...editData, content: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />
            </>
          )}

          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4">
            Update {selectedPage === "courses" ? "Course" : "Item"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemList;
