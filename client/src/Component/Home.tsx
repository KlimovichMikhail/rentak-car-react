import React from 'react';
import Title from '../Component/Title';
import ListCars from './ListCars';

function Home() {
    return (
      <div className="App">
        <Title/>
        <ListCars/>
      </div>
    );
  }

  export default Home;