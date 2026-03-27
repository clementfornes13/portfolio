import React from "react";

const services = [
  {
    title: "Landing Page (React)",
    price: "From €300 HT",
    description: "Responsive single-page website with animations and a contact form.",
  },
  {
    title: "Fullstack App (React + Firebase)",
    price: "From €900 HT",
    description: "Authentication, dashboard, Firestore setup, and responsive design.",
  },
  {
    title: "Maintenance / Debug",
    price: "€25 HT/hour",
    description: "Bug fixes, feature updates, and performance optimizations.",
  },
];

const TariffSection = () => {
  return (
    <section id="freelance" className="py-16 px-6 text-white bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Freelance Services & Rates</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="bg-muted/10 p-6 rounded-2xl shadow-lg border border-muted/20">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="mailto:contact@clementfornes.com"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
            Let's work together
          </a>
        </div>
      </div>
    </section>
  );
};

export default TariffSection;