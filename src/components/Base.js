import React from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "../config/animate";
const Base = ({ addBase, pizza }) => {
  const history = useHistory();

  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <button className="btn-icon" onClick={() => history.push("/")}>
        <svg
          id="svg10654"
          height="20px"
          viewBox="0 0 6.3499999 6.3500002"
          width="20px"
        >
          <g id="layer1" transform="translate(0 -290.65)">
            <path
              id="path9417"
              d="m1.8505492 292.23437a.26460982.26460982 0 0 0 -.1819011.0801l-1.32239993 1.32395a.26460982.26460982 0 0 0 0 .3731l1.32239993 1.32447a.26528594.26528594 0 0 0 .3751707-.37517l-.8707477-.87075h4.6477783a.2648413.2648413 0 1 0 0-.52968h-4.6498455l.8728149-.87075a.26460982.26460982 0 0 0 -.1932696-.45527z"
              font-variant-ligatures="normal"
              font-variant-position="normal"
              font-variant-caps="normal"
              font-variant-numeric="normal"
              font-variant-alternates="normal"
              font-feature-settings="normal"
              text-indent="0"
              text-align="start"
              text-decoration-line="none"
              text-decoration-style="solid"
              text-decoration-color="rgb(0,0,0)"
              text-transform="none"
              text-orientation="mixed"
              white-space="normal"
              shape-padding="0"
              isolation="auto"
              mix-blend-mode="normal"
              solid-color="rgb(0,0,0)"
              solid-opacity="1"
            />
          </g>
        </svg>
      </button>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, color: "#fad390", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Link to="/toppings">
            <motion.button whileHover={{ scale: 1.1 }}>Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
