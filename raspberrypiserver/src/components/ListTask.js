import React, { useState, useRef } from "react";
import WaterBar from "./Rive-Components/WaterBar.component.js";
import TodoList from './SubComponents/TodoComponent'
import Header from './SubComponents/header'
import titleImage from './../data/images/53.jpg'


const ListTask = (a) => {

  const [colorBack, setColorBack] = useState('rgb(3,15,22)');
  const [colorFont, setColorFont] = useState('white');
  const [points,setPoints] = useState(0);
  const [trigger,setTrigger] = useState(false);



  return (

    <div>
      <Header
        pageTitle={'TODO LIST'}
        image={'/Users/alejandrocarrillo/Documents/Projects/RaspberryPi/server/raspberrypiserver/src/data/images/53.jpg'}
      />
    <div 
    style={{
        width: "100vw",
        height: "100vh",
        color: colorFont,
        display:'inline-flex',
        backgroundColor:colorBack,
        overflow:'hidden',

      }}
    >
      <TodoList 
        style={{
          width: "50%",
          height: "50%",
          marginTop:'20px',
          }}
        points={points}
        setPoints={setPoints}
      />
      <div
        style={{
          width:'100%',
          height:'100%',
          paddingTop:'10%',
          overflow:'hidden',
        }}
      >
      <WaterBar 
        points={points*10} 
      />
      </div>

    </div>
    </div>
  );
};

export default ListTask;
