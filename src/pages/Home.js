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
        Harnessing the power of AI & Machine Learning.
      </motion.p>

      {/* Main Content */}
      <motion.div
        className="content-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
      >
        <p>
          At Theta AI, we build cutting-edge AI solutions, from NLP to
          predictive analytics. Our mission is to revolutionize data-driven
          decision-making.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
