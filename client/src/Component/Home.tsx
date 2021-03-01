import React from 'react';
import Title from '../Component/Title';
import ListCars from '../Component/ListCars';
import ReactDOM from 'react-dom';


function Home() {
    return (
      <div className="App">
        <Title/>
        <ListCars/>
      </div>
    );
  }
  ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );
  export default Home;