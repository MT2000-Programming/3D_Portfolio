"use client";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import Tilt from "react-parallax-tilt";
import { motion, Transition } from "framer-motion";
import { StaticImageData } from "next/image";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: StaticImageData;
};

// 🌀 Spring transition settings (same as your provided example)
const spring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};
const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[250px]">
      <motion.li
        layout
        transition={spring}
        className="w-full green-gradient p-[1px] rounded-[20px] shadow-card list-none"
      >
        <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          scale={1}
          transitionSpeed={450}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon.src} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </Tilt>
      </motion.li>
    </Tilt>
  );
};



// 🔀 Shuffle utility
function shuffle<T>([...array]: T[]) {
  return array.sort(() => Math.random() - 0.5);
}

const About = () => {
  const [order, setOrder] = useState(services);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1500);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <>
      <motion.div
        variants={textVariant()}
        className="sm:px-16 px-6 sm:py-10 py-4 max-w-7xl mx-auto"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <motion.p
          variants={fadeIn("", "tween", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {`I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
           Three.js. I'm a quick learner and collaborate closely with clients to
           create efficient, scalable, and user-friendly solutions that solve
           real-world problems. Let's work together to bring your ideas to life!`}
        </motion.p>
      </motion.div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        className="mt-20 overflow-hidden mx-[5%] lg:mx-[10%]"
      >
        {order.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </ul>
    </>
  );
};

export default SectionWrapper(About, "about");
