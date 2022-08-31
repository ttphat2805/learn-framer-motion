import React from "react";
import { containerVariants } from "../config/animate";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const btnVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const Order = ({ pizza }) => {
  const history = useHistory();

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <h2>Thank you for your order 🤔😍</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
      <motion.button
        onClick={() => history.push("/")}
        variants={btnVariants}
        whileHover={{
          scale: 1.1,
        }}
      >
        Start Again
      </motion.button>
    </motion.div>
  );
};

export default Order;
