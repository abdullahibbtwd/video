import React from "react";
import videos from "/video.mp4";
import ReactPlayer from "react-player";
import { animate, motion } from "framer-motion";


const imgVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const App = () => {
  return (
    <motion.div
    variants={textVariants}
    initial="initial"
    animate="animate"
    className="main">
      <motion.h1 variants={textVariants}>
        Store Management DeskTop Application
      </motion.h1>
      <motion.div className="cover" variants={textVariants}>
        <motion.video
          variants={imgVariants}
          initial="initial"
    animate="animate"
          controls={true}
          light={true}
          src={videos}
        ></motion.video>
     
      </motion.div>
    </motion.div>
  );
};

export default App;
