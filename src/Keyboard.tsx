import React, { FunctionComponent, useState, MutableRefObject } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

interface IProps {
   onChange: (input: string) => void;
   keyboardRef: MutableRefObject<typeof Keyboard>;
   keyval: string;
   currentCharVal: string;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
   onChange,
   keyboardRef,
   currentCharVal,
}) => {
   const [layoutName, setLayoutName] = useState('default');
   const [keyColor, setKeyColor] = useState(true);
   const onKeyPress = (button: string, event: Event) => {
      if (button === currentCharVal) {
         setKeyColor(true);
      } else if (button === '{space}' && ' ' === currentCharVal)
         setKeyColor(true);
      else if (button === '{space}' && currentCharVal !== ' ')
         setKeyColor(false);
      else setKeyColor(false);
      console.log(button, currentCharVal, currentCharVal === ' ');
   };
   const kblayout = {
      default: [
         '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
         '{tab} q w e r t y u i o p [ ] \\',
         "{lock} a s d f g h j k l ; ' {enter}",
         '{shift} z x c v b n m , . / {shift}',
         '.com @ {space}',
      ],
      shift: [
         '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
         '{tab} Q W E R T Y U I O P { } |',
         '{lock} A S D F G H J K L : " {enter}',
         '{shift} Z X C V B N M < > ? {shift}',
         '.com @ {space}',
      ],
   };
   return (
      <Keyboard
         keyboardRef={(r: (props: any) => JSX.Element) =>
            (keyboardRef.current = r)
         }
         layoutName={layoutName}
         layout={kblayout}
         physicalKeyboardHighlight
         physicalKeyboardHighlightPress
         onChange={onChange}
         onKeyPress={onKeyPress}
         onKeyReleased={onKeyPress}
         physicalKeyboardHighlightBgColor={keyColor ? '#09d3ac' : '#ff001596'}
      />
   );
};

export default KeyboardWrapper;
