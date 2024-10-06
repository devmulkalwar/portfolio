import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="bg-base-300 max-w-lg w-full p-8 rounded-lg shadow-lg my-4 mx-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
          Contact
        </h1>
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:gap-4 mb-4">
            {/* First Name */}
            <div className="form-control w-full mb-4 md:mb-0">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your Email"
            />
          </div>

          {/* Message */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea textarea-bordered resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your Message"
              rows="4" // Fixed height
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full hover:scale-105 transform transition-transform duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
