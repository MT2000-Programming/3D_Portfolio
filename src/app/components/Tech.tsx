import React from "react";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
   <div className='mt-20 !mt-20 flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology) => (
      <div className='w-[140px] h-[140px]' key={technology.name}>
        <BallCanvas icon={technology.icon.src} />
      </div>
    ))}
   </div>
  );
};

export default Tech;
