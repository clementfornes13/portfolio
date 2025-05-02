import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certificatPDF from "../images/certificat.pdf";

const certifications = [
  {
    title: "TOEIC",
    year: "2019",
    description: "Score: 905/990",
    link: "external",
    pdf: certificatPDF,
  },
  // Ajoutez d'autres certifications ici
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
          Mes Certifications
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-2xl p-8 shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setSelected(cert)}
            >
              <h2 className="text-2xl font-semibold mb-2">{cert.title}</h2>
              <p className="text-sm text-gray-400 mb-1">Année: {cert.year}</p>
              <p className="mb-4 leading-relaxed text-gray-200">{cert.description}</p>
              <div className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg hover:opacity-90 transition-opacity">
                Voir le certificat →
              </div>
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