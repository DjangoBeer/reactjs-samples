import React from 'react';
import ReactDOM from 'react-dom';
import BeerBox from './beerbox';
import CountDown from './countdown';


React.render(
  <BeerBox beer="guinness" />,
  document.getElementById('content')
);

React.render(
  <CountDown time="6" />,
  document.getElementById('timer')
);
