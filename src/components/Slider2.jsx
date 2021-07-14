import React from 'react';

export default class Slider2 extends React.Component {
    constructor(props) {
      super(props)
    }
    
    render() {
      let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
      <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
      <img  src="https://picsum.photos/800/302/?random" alt="3" />  , 
      <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
      <img src="https://picsum.photos/800/304/?random" alt="5" />  ];
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"></h1>
          </header>
          
          This is our carousal Component: 
          <br/>
          <br/>
          <br/>
          <Carousal.Carousel slides={slides}/>
            {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
        </div>
      );
    }
  }
  
  
  
  