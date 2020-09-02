import React, { Component } from 'react';
import './App.css';
import SolidGameCardDemo from './card1';
import FooterPagePro from './footer';
import AlignItemsList from './list';
import PrimarySearchAppBar from './navbar';
import SolidGameCardDemo2 from './card2';
import Carousel from './carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Divider from '@material-ui/core/Divider';
import Box from './box';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PrimarySearchAppBar/>
        <Carousel />
        <SolidGameCardDemo/>
        <SolidGameCardDemo2/>
        <Box />
        <Divider />
        <Box />
        <AlignItemsList/>
        <AlignItemsList/>
        <Box />
        <FooterPagePro/>
      </React.Fragment>
    
    );
  }
}

export default App;