import  { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    shift: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [receiptNo, setReceiptNo] = useState("");

  const generateReceiptNo = () => {
    return "SSASC-" + Math.floor(100000 + Math.random() * 900000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.shift) {
      alert("Please fill in all required fields.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    let storedEmails = JSON.parse(localStorage.getItem("submittedEmails")) || [];
    if (storedEmails.includes(formData.email)) {
      alert("This email has already been used for an application.");
      return;
    }

    storedEmails.push(formData.email);
    localStorage.setItem("submittedEmails", JSON.stringify(storedEmails));

    const newReceiptNo = generateReceiptNo();
    setReceiptNo(newReceiptNo);
    setSubmittedData(formData);
    setFormData({ name: "", email: "", phone: "", course: "", shift: "" });

    setTimeout(() => {
      generatePDF();
    }, 1000);
  };

  const generatePDF = () => {
    const input = document.getElementById("receipt");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const logo = new Image();
      // eslint-disable-next-line no-undef
      logo.src = process.env.PUBLIC_URL + "/entitylogo.gif";
      logo.onload = () => {
        pdf.addImage(logo, "PNG", 10, 10, 40, 20);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(18);
        pdf.text("Sri Sankara Arts and Science College", 55, 20);
        pdf.addImage(imgData, "PNG", 10, 40, 190, 0);
        pdf.save(`Admission_Receipt_${receiptNo}.pdf`);
      };
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg border-t-8 border-blue-700">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Apply for Admission</h2>
        <p className="text-gray-600 text-center mb-6">Fill in the form to apply for your desired course.</p>

        {!submittedData ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Phone *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
                maxLength="10"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Course *</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a Course</option>
                <option value="B.A">B.A</option>
                <option value="B.Sc">B.Sc</option>
                <option value="B.Com">B.Com</option>
                <option value="M.A">M.A</option>
                <option value="M.Sc">M.Sc</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">shift *</label>
              <select
                name="shift"
                value={formData.shift}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a Shift</option>
                <option value="Day College">Day College</option>
                <option value="Evening College">Evening College</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800 transition"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Application Submitted Successfully!</h3>
            <p className="text-lg text-gray-800 font-semibold">Receipt No: <span className="text-blue-700">{receiptNo}</span></p>
            <div id="receipt" className="mt-4 text-left bg-gray-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-bold text-center text-blue-900">Admission Receipt</h3>
              <p><strong>Receipt No:</strong> {receiptNo}</p>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Phone:</strong> {submittedData.phone}</p>
              <p><strong>Course Applied:</strong> {submittedData.course}</p>
              <p><strong>shift:</strong> {submittedData.shift}</p>
            </div>
            <button onClick={generatePDF} className="mt-4 bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">Download PDF</button>
            <button
              onClick={() => setSubmittedData(null)}
              className="mt-4 ml-4 bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Apply Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apply;