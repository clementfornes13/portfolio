import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certificatPDF from "../images/certificat.pdf";

const certifications = [
  {
    title: "TOEIC Listening and Reading",
    year: "2025",
    result: "905/990",
    link: "external",
    pdf: certificatPDF,
  },
];

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen py-20 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16"
        >
          My Certifications
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {certifications.map((cert, index) => (
            // https://upload.wikimedia.org/wikipedia/commons/3/39/ETS_Logo.svg
            // While hover, the text "Click to view the certification" should be displayed and the image should be blurred
                        <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:bg-gray-700 transition duration-300"
              onClick={() => setSelected(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/39/ETS_Logo.svg"
                  alt={cert.title}
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">{cert.title}</h2>
                  <p className="text-gray-400">{cert.year}</p>
                  <p className="text-gray-400">{cert.result}</p>
                </div>
              </div>
              <p className="text-gray-300">
                Click to view the certification
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-3/4 lg:w-1/2 h-[80%] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
              <iframe
                src={
                  selected.link === "external" ? selected.pdf : selected.link
                }
                title={selected.title}
                className="w-full h-full"
                frameBorder="0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
