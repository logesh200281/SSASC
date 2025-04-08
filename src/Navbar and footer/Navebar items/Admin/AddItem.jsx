/* eslint-disable react/prop-types */
import { useState } from "react";

const AddItem = ({ setSelectedPage }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedType, setSelectedType] = useState("news");

  // Course-specific fields
  const [department, setDepartment] = useState("");
  const [degree, setDegree] = useState("");
  const [program, setProgram] = useState("");
  const [duration, setDuration] = useState("");
  const [tuitionFees, setTuitionFees] = useState("");
  const [hostelFees, setHostelFees] = useState("");


  // Calculate Total Fees
  const totalFees =
    (parseFloat(tuitionFees) || 0) +
    (parseFloat(hostelFees) || 0) ;


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newItem;

    if (selectedType === "courses") {
      newItem = {
        department,
        degree,
        program,
        duration,
        fees: {
          tuition: tuitionFees,
          hostel: hostelFees,
          total: totalFees,
        },
      };
    } else {
      newItem = {
        title,
        date,
        content,
        image: selectedType === "gallery" ? previewImage : null,
      };
    }

    // Save to Local Storage
    const storedList = JSON.parse(localStorage.getItem(selectedType)) || [];
    const updatedList = [...storedList, newItem];
    localStorage.setItem(selectedType, JSON.stringify(updatedList));

    // Reset fields after submission
    setTitle("");
    setDate("");
    setContent("");
    setImage(null);
    setPreviewImage(null);
    setDepartment("");
    setDegree("");
    setProgram("");
    setDuration("");
    setTuitionFees("");
    setHostelFees("");

    alert(`${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} added successfully!`);
    setSelectedPage(selectedType);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Add New {selectedType === "news" ? "News" : selectedType === "gallery" ? "Gallery Item" : "Course"}
      </h2>

      {/* Dropdown to select type */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="news">News</option>
        <option value="gallery">Gallery</option>
        <option value="courses">Courses</option>
      </select>

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded mt-4">
        {/* Common Fields for News & Gallery */}
        {(selectedType === "news" || selectedType === "gallery") && (
          <>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
          </>
        )}

        {/* Image Upload for Gallery */}
        {selectedType === "gallery" && (
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded mb-2"
              required
            />
            {previewImage && (
              <div className="mt-2">
                <p>Preview:</p>
                <img src={previewImage} alt="Preview" className="w-32 h-32 object-cover mt-2 rounded" />
              </div>
            )}
          </div>
        )}

        {/* Course-specific Fields */}
        {selectedType === "courses" && (
          <>
            <input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="text"
              placeholder="Degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="text"
              placeholder="Program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="text"
              placeholder="Duration (e.g., 4 Years)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="number"
              placeholder="Semester Fees"
              value={tuitionFees}
              onChange={(e) => setTuitionFees(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="number"
              placeholder="Hostel Fees"
              value={hostelFees}
              onChange={(e) => setHostelFees(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              required
            />
            {/* Display Total Fees */}
            <div className="font-bold text-lg mt-2">Total Fees: ₹{totalFees}</div>
          </>
        )}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4">
          Add {selectedType === "news" ? "News" : selectedType === "gallery" ? "Gallery Item" : "Course"}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
