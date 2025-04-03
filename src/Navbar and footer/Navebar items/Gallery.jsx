import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("gallery")) || [];
    setImages(savedImages);
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img src={img.image} alt={img.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{img.title}</h2>
                <p className="text-gray-500 text-sm">{img.date}</p>
                <p className="text-gray-700 text-sm mt-2">{img.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No images added yet.</p>
        )}
      </div>

      {/* Full-Screen Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              ✕
            </button>

            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold">{images[selectedImageIndex].title}</h2>
              <p className="text-gray-500">{images[selectedImageIndex].date}</p>
              <p className="text-gray-700 text-sm my-2">{images[selectedImageIndex].content}</p>

              <div className="relative">
                <img
                  src={images[selectedImageIndex].image}
                  alt={images[selectedImageIndex].title}
                  className="w-full max-h-[80vh] object-contain"
                />

                {/* Previous Button */}
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
                >
                  ◀
                </button>

                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
