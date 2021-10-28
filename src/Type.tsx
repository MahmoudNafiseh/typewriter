import React, { useState, useMemo, ChangeEvent, useRef } from 'react';
import useKeyPress from './Hooks/useKeypress';
import Words from './Words';
import './Type.css';
import { Flex } from '@chakra-ui/layout';
import KeyboardWrapper from './Keyboard';
const Type = () => {
   const [leftPadding, setLeftPadding] = useState(
      new Array(20).fill(' ').join('')
   );
   let words = useMemo(() => Words(20), []);

   const [outgoingChars, setOutgoingChars] = useState('');
   const [currentChar, setCurrentChar] = useState(words.charAt(0));
   const [incomingChars, setIncomingChars] = useState(words.substr(1));
   const [key, setKey] = useState('');
   const [counter, setCounter] = useState(false);
   const [input, setInput] = useState('');
   const keyboard = useRef(null);

   const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
      const input = event.target.value;
      setInput(input);
      keyboard.current.setInput(input);
   };

   useKeyPress((key: React.SetStateAction<string>) => {
      //1
      let updatedOutgoingChars = outgoingChars;
      let updatedIncomingChars = incomingChars;
      setCounter(true);

      //2
      if (key === currentChar) {
         //3
         if (leftPadding.length > 0) {
            setLeftPadding(leftPadding.substring(1));
         }
         //4
         updatedOutgoingChars += currentChar;
         setOutgoingChars(updatedOutgoingChars);

         //5
         setCurrentChar(incomingChars.charAt(0));

         //6
         updatedIncomingChars = incomingChars.substring(1);
         if (updatedIncomingChars.split(' ').length < 10) {
            updatedIncomingChars += ' ' + Words(20);
         }
         setIncomingChars(updatedIncomingChars);
      }
      setKey(key);
      console.log(key);
   });
   return (
      <Flex d='flex' justifyContent='center' flexDir='column'>
         <p className='Character'>
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
         </p>
         <Flex
            d='flex'
            w='50%'
            maxW='75%'
            justifyContent='center'
            alignSelf='center'
            mt='5em'
         >
            <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
         </Flex>
      </Flex>
   );
};
export default Type;
