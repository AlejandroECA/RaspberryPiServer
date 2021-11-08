import React from "react";
import powerButton from './410-767-power-button.riv'
import {useRive } from 'rive-react';


const PowerButtonRive = () =>{ 

    const { RiveComponent, rive } = useRive({
        src: powerButton,
        autoplay: false,
      });
      
  
      const onButtonClick = () => {
  
          rive.play()
          setTimeout(()=>{rive.stop()},2000)
      
      }
  
      return (
          <div
              style={{
                //   paddingLeft:'90%'
                with:'100%',
                height:'100%'
              }}
          >
              <RiveComponent 
                  onClick={() => onButtonClick() }
              /> 
          </div>
  
      )

}

export default PowerButtonRive