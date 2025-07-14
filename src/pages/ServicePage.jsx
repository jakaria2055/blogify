import React from "react";
import { useNavigate } from "react-router";
import { FaPenAlt, FaChartLine, FaUsers, FaLock } from "react-icons/fa";

const ServicePage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaPenAlt className="text-4xl mb-4 text-blue-600" />,
      title: "Professional Blogging",
      description:
        "Get expert writing tools and analytics to craft compelling content that grows your audience.",
    },
    {
      icon: <FaChartLine className="text-4xl mb-4 text-green-600" />,
      title: "Performance Analytics",
      description:
        "Track reader engagement, traffic sources, and content performance with our dashboard.",
    },
    {
      icon: <FaUsers className="text-4xl mb-4 text-purple-600" />,
      title: "Community Building",
      description:
        "Connect with other bloggers and grow your network through our collaboration features.",
    },
    {
      icon: <FaLock className="text-4xl mb-4 text-orange-600" />,
      title: "Premium Security",
      description:
        "Enterprise-grade protection for your content and reader data.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <button
        onClick={() => navigate("/")}
        className="mb-6 text-sm font-medium text-blue-600 hover:underline"
      >
        🔙 Back to Home
      </button>
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          BLOGIFY Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to start, grow, and monetize your blog
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to elevate your blog?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of creators already growing with BLOGIFY
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default ServicePage;
