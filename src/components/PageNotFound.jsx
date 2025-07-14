import React from 'react';
import { motion } from 'framer-motion';

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Oops! The page you're looking for doesn't exist.</p>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Return Home
          </a>
        </motion.div>
      </motion.div>

      {/* Optional decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-indigo-200 opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-purple-200 opacity-30"
      />
    </div>
  );
};

export default PageNotFound;