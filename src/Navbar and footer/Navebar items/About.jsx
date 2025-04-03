

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12 leading-tight">
          About Sri Sankara Arts and Science College
        </h1>

        <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 mb-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">College Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Sri Sankara Arts and Science College, located in the serene town of Enathur, Kanchipuram, is a premier educational institution with a legacy of excellence. Our mission is to provide an all-encompassing, holistic educational experience that prepares students for success in their chosen fields. From arts to science and commerce, our courses cater to all academic interests, aiming to foster intellectual curiosity and practical application.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Equipped with state-of-the-art facilities, highly qualified faculty, and a robust curriculum, Sri Sankara College is dedicated to empowering its students with the knowledge, skills, and values necessary to thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Goals Section */}
          <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 mb-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Goals</h2>
            <ul className="text-lg text-gray-700 space-y-4 leading-relaxed">
              <li>- Maintaining High Academic Standards</li>
              <li>- Educating the students from rural, agricultural and weaving Community by giving preference to them.</li>
              <li>- Keeping pace with knowledge era and gearing up all activities to match the demands of the scientific and technological world.</li>
              <li>- Enhancing the mindset towards research and creation of New Knowledge.</li>
              <li>- Making every student of the college Skilled and Employable.</li>
            </ul>
          </div>

          {/* Mission Section */}
          <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 mb-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Mission</h2>
            <ul className="text-lg text-gray-700 space-y-4 leading-relaxed">
              <li>- Imparting holistic and man making education with an emphasis on Character, Culture and Values.</li>
              <li>- Designing the Curriculum that transform the students into value added and skilled human resources.</li>
              <li>- Constantly upgrading academic and management practices towards total quality management and promotion of quality in all spheres.</li>
              <li>- Extending the best student support services by evolving a curriculum relevant to student community and the society at large.</li>
              <li>- Molding the teachers in such a way that they biecane the role models in promoting Higher Education.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 mb-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Facilities</h2>
          <ul className="text-lg text-gray-700 space-y-4 leading-relaxed">
            <li>• State-of-the-art classrooms equipped with smart boards and audio-visual aids.</li>
            <li>• Advanced laboratories for practical learning across disciplines.</li>
            <li>• A vast library with access to numerous academic resources, journals, and online databases.</li>
            <li>• A fully-equipped sports complex offering both indoor and outdoor games.</li>
            <li>• Modern hostel facilities with Wi-Fi, 24/7 security, and recreational areas.</li>
            <li>• Dedicated career counseling and placement services for all students.</li>
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 mb-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Address:</strong> Sri Sankara Arts and Science College, Enathur, Kanchipuram, Tamil Nadu, India.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> +91 123 456 7890
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> <a href="mailto:info@srisankara.ac.in" className="text-blue-600 hover:underline">admin@srisankaracollege.edu.in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
