"use client";
import React from 'react';
import{ styles } from '../styles';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { testimonials } from '../constants';
const Feedbacks = () => {
  return (
    <div className={`${styles.paddingX} bg-tertiary rounded-[20px] sm:py-10 py-4 max-w-6xl mx-auto min-h-[300px`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
      <div className='mt-20 flex flex-row gap-7 justify-center items-center'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className='bg-black-gradient p-10 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between'
          >
            <p className='text-white font-black text-[48px]'>&quot;</p>
            <div className='mt-1'>
              <p className='text-white tracking-wider text-[18px]'>{testimonial.testimonial}</p>
              <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                  <p className='text-white font-medium text-[16px]'>
                    <span className='blue-text-gradient'>@</span> {testimonial.name}
                  </p>
                  <p className='mt-1 text-secondary text-[12px]'>{testimonial.designation} of {testimonial.company}</p>
                </div>
                <img
                  src={testimonial.image}
                  alt={`feedback_by-${testimonial.name}`}
                  className='w-10 h-10 rounded-full object-cover'
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div> 
    </div> 
  );
};

export default Feedbacks;
