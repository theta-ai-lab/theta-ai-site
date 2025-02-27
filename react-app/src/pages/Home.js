import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Matrix Effect */}
      <div className="matrix-overlay"></div>

      {/* Animated Title */}
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Theta AI
      </motion.h1>

      {/* Subtitle - Typing Effect */}
      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        Artificial Intelligence and Machine Learning solutions
      </motion.p>

      {/* Main Content */}
      <motion.div
        className="content-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
      >
        <p>
          At Theta AI, we build cutting-edge AI solutions in various application areas, across numerous domains.
          Our team has significant expertise ranging from state-of-the-art research projects to very large scale industrial systems.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
