import React from "react";
import { useRive,useStateMachineInput } from 'rive-react';

import waterRive  from './715-1406-water-bar-demo.riv'


const WaterBar = ({points}) => {


    const STATE_MACHINE_NAME = 'State Machine'
    const INPUT_NAME_1 = 'Level'
    
    const { rive, RiveComponent } = useRive({
        src: waterRive,
        stateMachines:STATE_MACHINE_NAME,
        artboard: 'New Artboard',
        autoplay: true,

    });
    
    const ValueInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME_1
    );



    return (

        <RiveComponent
            style={{
                width:'50vw',
                height:'50vh',
            }}
                onClick={
                () => ValueInput.value=(points===null?0:points)
            }
        />
    );

}

export default WaterBar