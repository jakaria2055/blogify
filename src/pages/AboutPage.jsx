import React from "react";
import { useNavigate } from "react-router";
import {
  FaBookOpen,
  FaUsers,
  FaRocket,
  FaHeart,
  FaPenAlt,
  FaChartLine,
  FaLock,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const AboutPage = () => {
  const navigate = useNavigate();
  // Stats data using only react-icons
  const stats = [
    {
      value: "10,000+",
      label: "Active Bloggers",
      icon: <FaBookOpen className="text-blue-500" />,
    },
    {
      value: "5M+",
      label: "Monthly Readers",
      icon: <FaUsers className="text-green-500" />,
    },
    {
      value: "2018",
      label: "Founded In",
      icon: <FaRocket className="text-purple-500" />,
    },
    {
      value: "100%",
      label: "Passion",
      icon: <FaHeart className="text-red-500" />,
    },
  ];

  // Services data
  const services = [
    {
      icon: <FaPenAlt className="text-blue-500 text-3xl" />,
      title: "Content Creation",
      description: "Powerful tools for writers and bloggers",
    },
    {
      icon: <FaChartLine className="text-green-500 text-3xl" />,
      title: "Analytics",
      description: "Understand your audience better",
    },
    {
      icon: <CgWebsite className="text-purple-500 text-3xl" />,
      title: "Customization",
      description: "Make your blog truly yours",
    },
    {
      icon: <FaLock className="text-red-500 text-3xl" />,
      title: "Security",
      description: "Your content is always protected",
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
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          BLOGIFY was born from a simple idea: everyone has a story worth
          sharing.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-20 bg-blue-50 rounded-xl p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            We empower creators to share their knowledge, build communities, and
            make an impact through beautiful, intuitive blogging tools.
          </p>
          <div className="flex justify-center space-x-6 mt-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-4">
                <div className="flex justify-center mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center text-3xl mb-3">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="mailto:contact@blogify.com"
            className="flex items-center space-x-2 hover:text-blue-200"
          >
            <MdOutlineEmail className="text-2xl" />
            <span>Email Us</span>
          </a>
        </div>
        <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300">
          Contact Our Team
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
