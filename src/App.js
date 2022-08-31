import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { motion } from "framer-motion";

const svgLogoPath = {
  hidden: { pathLength: 0 },
  visible: {
    y: [0, 20, 0],
    pathLength: 1,
    transition: {
      yoyo: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  },
};

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <svg
        viewBox="-52 -92 261 291"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-animation"
      >
        <motion.path
          variants={svgLogoPath}
          initial="hidden"
          animate="visible"
          fill="#FF0066"
          d="M42.4,-58.6C57.2,-47.6,72.9,-38.2,76.3,-25.4C79.7,-12.5,70.7,3.8,61.9,16.8C53.1,29.8,44.5,39.6,34.2,52.5C23.9,65.5,11.9,81.7,-2.8,85.5C-17.5,89.4,-35,80.8,-48.6,68.9C-62.1,57,-71.8,41.7,-77.1,25.1C-82.3,8.5,-83.2,-9.4,-74.5,-20.6C-65.9,-31.7,-47.7,-36.1,-33.7,-47.4C-19.6,-58.7,-9.8,-76.9,2,-79.6C13.8,-82.4,27.6,-69.7,42.4,-58.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-animation2"
      >
        <motion.path
          fill="#F2F4F8"
          d="M33.3,-52.1C45.5,-43.9,59.5,-38.7,70.1,-28.3C80.7,-17.8,88,-2.1,86.9,13.2C85.9,28.5,76.5,43.4,63.7,51.5C50.9,59.7,34.7,61.3,19.2,66.3C3.7,71.2,-11.1,79.7,-21.8,75.8C-32.4,71.9,-39,55.7,-43.4,42.2C-47.9,28.8,-50.3,18.2,-50.8,7.9C-51.4,-2.4,-50.1,-12.3,-48.3,-24.4C-46.5,-36.5,-44.1,-50.7,-35.9,-60.8C-27.8,-70.9,-13.9,-76.9,-1.7,-74.3C10.5,-71.7,21,-60.4,33.3,-52.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
