import React from 'react';
import { motion } from 'framer-motion';
import { CountAnimation } from './count-animation';

interface StatBlockProps {
  number: number;
  prefix?: string;
  suffix?: string;
  title: string;
  subtitle?: string;
}

const StatBlock: React.FC<StatBlockProps> = ({
  number,
  prefix,
  suffix,
  title,
  subtitle,
}) => {

  return (
    <motion.div 
      className="bg-black/70 rounded-lg shadow-md p-6 flex flex-col border border-zinc-700 hover:border-zinc-600 transition-all duration-300 ease-in-out hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="text-3xl font-bold text-zinc-200 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {prefix}<CountAnimation number={number} className='inline-block'/>{suffix}
      </motion.div>
      <motion.div 
        className="font-medium text-zinc-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {title}
      </motion.div>
      {subtitle && (
        <motion.div 
          className="text-sm text-zinc-500 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          {subtitle}
        </motion.div>
      )}
    </motion.div>
  );
};

export default StatBlock;