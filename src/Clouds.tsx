import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './Clouds.css';
const Clouds = React.forwardRef<HTMLDivElement>((props, ref) => {
   return (
      <div className='clouds'>
         <motion.div
            animate={{ x: '-100%', opacity: 1 }}
            transition={{
               repeat: Infinity,
               duration: 100,
               repeatType: 'reverse',
            }}
            className='clouds'
         >
            <Box
               position='absolute'
               bottom='7'
               h='132'
               className='clouds3'
            ></Box>
         </motion.div>
         <motion.div
            animate={{ x: '-100%', opacity: 1 }}
            transition={{
               repeat: Infinity,
               duration: 80,
               repeatType: 'reverse',
            }}
            className='clouds'
         >
            <Box
               position='absolute'
               bottom='0'
               h='132'
               className='clouds1'
            ></Box>
         </motion.div>

         <motion.div
            animate={{ x: '100%', opacity: 1 }}
            transition={{
               repeat: Infinity,
               duration: 100,
               repeatType: 'reverse',
            }}
         >
            <Box
               position='absolute'
               bottom='-5'
               right='0'
               h='106'
               className='clouds2'
            ></Box>
         </motion.div>
      </div>
   );
});
export default Clouds;
