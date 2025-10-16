"use client"; 
import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';
interface ExperienceItem {
  date: string;
  iconBg?: string;
  title?: string;
  company_name?: string;
  icon?: { src?: string }; // adjust to your actual icon shape
  points?: string[];
}
const ExperienceCard: React.FC<{ experience: ExperienceItem }>=({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{borderRight:'7px solid #232631'}}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={<div className='flex justify-center items-center w-full h-full'>
        <img 
        src={experience.icon?.src}
        alt={experience.company_name}
        className='w-[60%] h-[60%] object-contain'/>
      </div>}>
          <div>
            <h3 className='text-white font-bold text-[24px]'>
              {experience.title}
            </h3>
            <p className='font-semibold text-[20px] text-secondary'
            style={{margin:0}}>{experience.company_name}</p>
          </div>
          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points?.map((point, index) => (
              <li key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'>
                {point}
              </li>
            ))}
          </ul>
    </VerticalTimelineElement> )}
const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="sm:px-16 px-6 sm:py-10 py-4 max-w-7xl mx-auto justify-center items-center flex flex-col"
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
