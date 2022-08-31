import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.3 },
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
