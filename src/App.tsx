import React, { useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/layout';
import TopPage from './TopPage';
import Info from './Info';

const App = () => {
   return (
      <VStack>
         <TopPage />
         <Info />
      </VStack>
   );
};
export default App;
