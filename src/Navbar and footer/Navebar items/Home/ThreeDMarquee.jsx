/* eslint-disable react/prop-types */


const ThreeDMarquee = ({ images }) => {
  return (
    <div className="3d-marquee-container">
      <div className="3d-marquee">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Marquee Image ${index + 1}`} className="3d-marquee-item" />
        ))}
      </div>
    </div>
  );
};

export default ThreeDMarquee;