"use client";
import { styles }  from "../styles";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-contain bg-cover bg-center bg-no-repeat`}  style={{ backgroundImage: "url('/herobg.png')" }}>
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] 
        max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]"/>
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-500 to-transparent"/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-[#915EFF]">Mohamed Ahmed</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className="sm:block hidden"/> interfaces and web applications
            </p>
          </div>
      </div>
        <ComputersCanvas/>
      <div className=" relative  w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 
              border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="w-3 h-3 rounded-full bg-gray-400 mb-1"
                  />
              </div>
              </a>
        </div>
    </section>
  );
};

export default Hero;
