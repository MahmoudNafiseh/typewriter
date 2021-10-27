import React, { useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/layout';
import TopPage from './TopPage';
import Info from './Info';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Type from './Type';

const App = () => {
   return (
      <Router>
         <Switch>
            <Route path='/' exact>
               <TopPage />
               <Info />
            </Route>
            <Route path='/typewriter' component={Type} />
         </Switch>
      </Router>
   );
};
export default App;
