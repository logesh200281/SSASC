import { Link } from 'react-router-dom';

const Admission = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white py-12 font-serif">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-900">Admission Open</h2>
          <p className="mt-4 text-lg text-gray-700">Join our prestigious Arts and Science College and shape your future.</p>
        </div>

        {/* Admission Process */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-800">Eligibility Criteria</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Minimum qualification: 10+2 or equivalent</li>
              <li>Required subjects vary by course</li>
              <li>Merit-based and entrance-based admissions</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-800">Admission Process</h3>
            <ol className="mt-4 text-gray-600 list-decimal list-inside">
              <li>Fill out the online application form</li>
              <li>Submit required documents</li>
              <li>Appear for entrance (if applicable)</li>
              <li>Pay fees and confirm admission</li>
            </ol>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link to="/apply" className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
            Apply Now
          </Link>
          <p className="mt-4 text-gray-700">For inquiries, contact us at <span className="text-blue-600 font-semibold">+91-12345-67890</span></p>
        </div>
      </div>
    </div>
  );
};

export default Admission;