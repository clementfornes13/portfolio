import React from "react";
import { FaLaptopCode, FaChartBar, FaBug, FaRocket } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Custom Websites",
    description: "Modern, responsive landing pages and business websites built with React, Tailwind, and best practices.",
  },
  {
    icon: <FaChartBar size={28} />,
    title: "Dashboards & BI",
    description: "Interactive dashboards and tools using Power BI, Firebase, or Excel for real-time insights and reporting.",
  },
  {
    icon: <FaBug size={28} />,
    title: "Debugging & Optimization",
    description: "Need help fixing bugs, improving load times, or refactoring code? I’ve got your back.",
  },
  {
    icon: <FaRocket size={28} />,
    title: "MVP Prototyping",
    description: "Build and launch your MVP or proof of concept fast, with scalable architecture and smooth UX.",
  },
];

const techBadges = [
  "React", "Tailwind", "Next.js", "Firebase", "Power BI", "Excel", "Vite", "Framer Motion",
];

const FreelanceServices = () => {
  return (
    <section id="freelance" className="p-10 text-white bg-black">
      <h2 className="text-4xl font-bold mb-4 text-center">Freelance Services</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
        Need a custom solution, a modern website, or help debugging a project?
        I help startups, entrepreneurs and teams turn ideas into polished code – fast and efficiently.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {techBadges.map((tech, i) => (
          <span
            key={i}
            className="bg-gradient-to-br from-blue-500 to-purple-600 text-sm px-3 py-1 rounded-full text-white font-medium shadow-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-4 mb-3 text-blue-400">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="mailto:contact@clementfornes.com"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Let's work together
        </a>
      </div>


      
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Freelance Services
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I help individuals, startups, and companies build fast, clean, and scalable web applications.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 text-left">
          <ServiceCard title="What I Offer" items={[
            'Web & Mobile App Development',
            'Landing Pages & Prototypes',
            'Firebase / Firestore Integration',
            'Performance & SEO Optimization',
          ]} />

          <ServiceCard title="How I Work" items={[
            '1. Understanding your goals',
            '2. Building a prototype quickly',
            '3. Weekly progress updates',
            '4. Clean handover with documentation',
          ]} />
        </div>

        <div className="mt-12">
          <a
            href="mailto:contact@clementfornes.com"
            className="inline-block bg-primary text-background px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ title, items }) {
  return (
    <motion.div
      className="bg-background rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3 text-gray-300">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className="text-green-400 mt-1 mr-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default FreelanceServices;