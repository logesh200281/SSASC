/* eslint-disable react/prop-types */

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold">{news.title}</h2>
      <p className="text-gray-600">{news.date}</p>
      <p className="mt-2">{news.content}</p>
    </div>
  );
};

export default NewsCard;
