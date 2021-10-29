import React, { useState, useMemo, useRef } from 'react';
import useKeyPress from './Hooks/useKeypress';
import Words from './Words';
import './Type.css';
import { Flex, Text } from '@chakra-ui/layout';
import KeyboardWrapper from './Keyboard';
const Type = () => {
   const [leftPadding, setLeftPadding] = useState(
      new Array(20).fill(' ').join('')
   );
   let words = useMemo(() => Words(20).toLowerCase(), []);

   const [outgoingChars, setOutgoingChars] = useState('');
   const [currentChar, setCurrentChar] = useState(words.charAt(0));
   const [incomingChars, setIncomingChars] = useState(words.substr(1));
   const [key, setKey] = useState('');
   const [counter, setCounter] = useState(false);
   const [input, setInput] = useState('');
   const keyboard = useRef(null);

   // const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
   //    const input = event.target.value;
   //    setInput(input);
   //    keyboard.current.setInput(input);
   // };

   useKeyPress((key: React.SetStateAction<string>) => {
      let updatedOutgoingChars = outgoingChars;
      let updatedIncomingChars = incomingChars;
      setCounter(true);

      if (key === currentChar) {
         if (leftPadding.length > 0) {
            setLeftPadding(leftPadding.substring(1));
         }
         updatedOutgoingChars += currentChar;
         setOutgoingChars(updatedOutgoingChars);

         setCurrentChar(incomingChars.charAt(0));

         updatedIncomingChars = incomingChars.substring(1);
         if (updatedIncomingChars.split(' ').length < 10) {
            updatedIncomingChars += ' ' + Words(20);
         }
         setIncomingChars(updatedIncomingChars);
      }
      setKey(key);
   });
   return (
      <Flex d='flex' justifyContent='center' flexDir='column'>
         <Text className='Character'>
            <span className='Character-out'>
               {(leftPadding + outgoingChars).slice(-20)}
            </span>
            <span
               className={
                  key !== currentChar &&
                  counter &&
                  key !== outgoingChars[outgoingChars.length - 1]
                     ? 'Character-current-wrong'
                     : 'Character-current'
               }
            >
               {currentChar}
            </span>
            <span>{incomingChars.substr(0, 20)}</span>
         </Text>
         <Flex
            d='flex'
            w='50%'
            maxW='75%'
            justifyContent='center'
            alignSelf='center'
            mt='5em'
            pointerEvents='none'
         >
            <KeyboardWrapper
               currentCharVal={currentChar}
               keyboardRef={keyboard}
               onChange={setInput}
            />
         </Flex>
      </Flex>
   );
};
export default Type;
