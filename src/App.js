import React, { Component } from 'react';
import Carousel from './components/Carousel/Carousel'
import CarouselSlide from './components/CarouselSlide/CarouselSlide'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel>
          <CarouselSlide>
            <img src="https://picsum.photos/630/300?image=0" alt=""/>
          </CarouselSlide>
          <CarouselSlide>
            <img src="https://picsum.photos/630/300?image=1" alt=""/>
          </CarouselSlide>
          <CarouselSlide>
            <img src="https://picsum.photos/630/300?image=3" alt=""/>
          </CarouselSlide>
          <CarouselSlide>
            <img src="https://picsum.photos/630/300?image=4" alt=""/>
          </CarouselSlide>
        </Carousel>
      </div>
    );
  }
}

export default App;
