import * as React from 'react';
import { Text, Box, Flex, Image, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './Clouds.css';
import Typing from './images/typing.png';

const Info = () => {
   return (
      <Flex
         d='flex'
         w='100%'
         flexDir='row'
         justifyContent='space-around'
         id='test'
      >
         <Box d='flex' justifyContent='end' h='445px' w='50%' marginRight='3%'>
            <Image h='100%' src={Typing} />
         </Box>

         <Box w='50%'>
            <Heading
               w='30%'
               size='xs'
               fontWeight='500'
               textColor='#BEC8CE'
               letterSpacing='0.15em'
            >
               WHAT IS TYPINGCLUB?
            </Heading>
            <Heading size='lg' w='50%' fontWeight='500'>
               TypingClub is the most effective way to learn how to type.
            </Heading>
            <Text
               size='lg'
               w='50%'
               fontSize='18px'
               fontWeight='300'
               lineHeight='1.6em'
            >
               It is web based and highly effective. TypingClub is (and will
               always be) free for both individuals and schools. There is an
               optional paid school edition.
            </Text>
         </Box>
      </Flex>
   );
};
export default Info;
