

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8eaf6] to-[#f3e5f5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#5e35b1] mb-4">Contact Us</h1>
          <p className="text-xl text-gray-700">
            We are here to assist you with all your inquiries. Reach out to us today!
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white shadow-2xl rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold text-[#5e35b1] mb-8 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#5e35b1]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#5e35b1]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#5e35b1] h-32"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#5e35b1] text-white py-3 px-8 rounded-lg hover:bg-[#4e2a8f] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Location Map Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-[#5e35b1] mb-4">Find Us Here</h2>
          <p className="text-xl text-gray-700 mb-8">
            Sri Sankara Arts and Science College, Enathur, Kanchipuram
          </p>
          <iframe
            title="College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6990505293466!2d79.7020198153243!3d12.83152299098955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528ddf0d008f8b%3A0x7bdfd69c8487de45!2sSri%20Sankara%20Arts%20and%20Science%20College%2C%20Enathur%2C%20Kanchipuram!5e0!3m2!1sen!2sin!4v1615491219874!5m2!1sen!2sin"
            className="w-full h-96 border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>

        {/* Contact Details */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-[#5e35b1] mb-4">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-2">Phone: +91 9876543210</p>
          <p className="text-lg text-gray-700 mb-2">Email: admin@sankaracollege.edu.in</p>
          <p className="text-lg text-gray-700 mb-2">Address: Enathur, Kanchipuram, Tamil Nadu</p>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
