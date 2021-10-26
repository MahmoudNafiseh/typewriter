import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
   ChakraProvider,
   Box,
   Text,
   Link,
   Stack,
   Button,
   Container,
   Flex,
   Image,
   Heading,
   Menu,
   MenuItem,
   MenuList,
   Breadcrumb,
   BreadcrumbLink,
   BreadcrumbItem,
   MenuButton,
   MenuDivider,
   Circle,
   VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Moon from './images/moon.png';
import Clouds from './Clouds';

library.add(fas);

const TopPage = () => {
   const [scrollPosition, setPosition] = useState(0);
   const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return {
         width,
         height,
      };
   };

   const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
   );

   useEffect(() => {
      function handleResize() {
         setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   useLayoutEffect(() => {
      function updatePosition() {
         setPosition(window.pageYOffset);
      }
      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
   }, []);
   console.log(scrollPosition, windowDimensions.height / 2);

   const myRef: any = useRef();
   return (
      <Flex
         flexDirection='column'
         w='100%'
         overflowX='hidden'
         overflowY='hidden'
         ref={myRef}
      >
         <Container maxW='container.2xl' px='0'>
            <Flex
               className='test'
               flexDirection='column'
               h='100vh'
               overflowX='hidden'
               overflowY='hidden'
            >
               <Box
                  className={
                     scrollPosition > windowDimensions.height / 2
                        ? 'nav2'
                        : 'nav'
                  }
               >
                  <Heading size='lg'>TypingClub</Heading>
                  <Breadcrumb
                     size='sm'
                     spacing='6'
                     separator=' '
                     className='menu'
                  >
                     <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Get Started</BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbItem>
                        <BreadcrumbLink href='#'>School Edition</BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Store</BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>
                           <Menu>
                              <MenuButton outline='none' className='menubutton'>
                                 Language <FontAwesomeIcon icon='caret-down' />
                              </MenuButton>
                              <MenuList minW='0' className='menulist'>
                                 <MenuItem h='7'>Deutsch</MenuItem>
                                 <MenuItem h='7'>Espanol</MenuItem>
                                 <MenuItem h='7'>Francais</MenuItem>
                                 <MenuItem h='7'>Portugues</MenuItem>
                                 <MenuItem h='7'>Chinese</MenuItem>
                                 <MenuItem h='7'>Russian</MenuItem>
                                 <MenuItem h='7'>Slovenian</MenuItem>
                                 <MenuItem h='7'>Italian</MenuItem>
                                 <MenuItem h='7'>Georgian</MenuItem>
                                 <MenuItem h='7'>Polish</MenuItem>
                                 <MenuItem h='7'>Magyar</MenuItem>
                                 <MenuItem h='7'>Svenska</MenuItem>
                                 <MenuItem h='7'>More Languages</MenuItem>
                                 <MenuDivider borderColor='#e5e5e5' />
                                 <MenuItem h='7'>Dvorak typing</MenuItem>
                                 <MenuItem h='7'>One hand typing</MenuItem>
                              </MenuList>
                           </Menu>
                        </BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbItem className='loginbtn'>
                        <BreadcrumbLink className='logintext' href='#'>
                           Login
                        </BreadcrumbLink>
                     </BreadcrumbItem>
                  </Breadcrumb>
               </Box>
               <Flex
                  d='flex'
                  justifyContent='center'
                  alignItems='center'
                  w='100%'
                  h='full'
               >
                  <Image
                     boxSize='200px'
                     src={Moon}
                     position='absolute'
                     left='12%'
                     top='30%'
                     className='moon'
                  />
                  <Flex
                     position='absolute'
                     display='flex'
                     flexDir='column'
                     className='title-heading'
                  >
                     <Text
                        color='white'
                        display='flex'
                        flexWrap='wrap'
                        className='headertext'
                        textAlign='left'
                        width='510'
                     >
                        Learn Touch Typing&nbsp;
                        <Typewriter
                           onInit={(typewriter) => {
                              typewriter.typeString('for free!').start();
                           }}
                        />
                     </Text>
                     <Button
                        size='lg'
                        height='48px'
                        width='200px'
                        color='#084f8e'
                        fontWeight='normal'
                        className='btn'
                     >
                        Get Started
                     </Button>
                  </Flex>
               </Flex>
               <a href='#test'>
                  <Circle size='12' className='downbutton'>
                     <FontAwesomeIcon
                        className='chevronicon'
                        icon='chevron-down'
                     />
                  </Circle>
               </a>
            </Flex>
         </Container>
         <Clouds />
      </Flex>
   );
};
export default TopPage;
