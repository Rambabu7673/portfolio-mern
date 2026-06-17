import { motion } from "framer-motion";
import { useState } from "react";
import contact from "../../../api/contact";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [msg,setMsg]=useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const response = await contact.post("/api/addcontact", form);

      if (response.status === 201 || response.status === 200) {
        setMsg("Contact has been send  Successfully 🎉");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);
      msg("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Contact <span className="text-green-800">Me</span>
        </motion.h2>

        <p className="text-center text-gray-600 mb-12">
          Have a project in mind? Let's work together.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Let's Talk</h3>

            <p className="text-gray-600">
              Feel free to contact me for web development, freelance projects,
              internships, or collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-green-800 text-2xl" />
                <span>rambabu767301@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-green-800 text-2xl" />
                <span>+91 7673865989</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-green-800 text-2xl" />
                <span>Patna, Bihar, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-6">
              <a
                href="https://github.com/Rambabu7673"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-green-800 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-green-800 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            onSubmit={submitHandle}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            {msg && (
              <p className="text-center mb-4 font-medium text-green-700">
                {msg}
              </p>
            )}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 border rounded-lg mb-4 outline-none focus:border-green-800"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 border rounded-lg mb-4 outline-none focus:border-green-800"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 border rounded-lg mb-4 outline-none focus:border-green-800"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-900 transition duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
