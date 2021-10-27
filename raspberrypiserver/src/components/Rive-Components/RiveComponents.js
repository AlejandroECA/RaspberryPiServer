import React, {useState, useEffect, useRef} from "react";
import Rive,{ useRive,useStateMachineInput } from 'rive-react';
import switche from './850-1653-smiley-switch.riv'
import globe from './1242-2394-milkshake-bomb.riv'
import monster from './623-1217-happy-monster.riv'
import teddy from './828-1605-teddy-animation.riv'
import useMouse from '@react-hook/mouse-position'



export function Example() {
    const STATE_MACHINE_NAME = 'Remember Start SM';
    const INPUT_NAME = 'Toggle'
    
    const { rive, RiveComponent } = useRive({
        src: switche,
        stateMachines:STATE_MACHINE_NAME,
    //   artboard: 'Artboard',
        autoplay: true, 
    });
    
    // pressedInput in a trigger state machine input. To transition the state
    // we need to call the `fire()` method on the input.
    const onclickInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME
    );

    // console.log(rive);
    
    return (
        // The animation will fit to the parent element, so we set a large height
        // and width for this example.
        <div style={{ height: '500px', width: '500px' }}>
        <RiveComponent
            onClick={() => onclickInput.fire()} 
        />
        </div>
    );
}

export function Teddy({valuex}) {

    // TODO: check this ref in parent component

    


    const STATE_MACHINE_NAME = 'State Machine 1'
    const INPUT_NAME_1 = 'Check'
    const INPUT_NAME_2 = 'Look'
    const INPUT_NAME_3 = 'success'
    const INPUT_NAME_4 = 'fail'
    const INPUT_NAME_5 = 'success'
    
    const { rive, RiveComponent } = useRive({
        src: teddy,
        stateMachines:STATE_MACHINE_NAME,
        artboard: 'Artboard',
        autoplay: true,
        // layout: new Layout({ fit: Fit.Cover }), 
        // fit: rive.layout.alignment.
        // onStateChange: (e) => {
        //     console.log(e.data[0]);
        // }
    });
    
    // pressedInput in a trigger state machine input. To transition the state
    // we need to call the `fire()` method on the input.
    const SuccessInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME_5
    );

    const LookInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME_2
    );
    
    const CheckInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME_1
    );


    return (

        <RiveComponent
            onClick={() => SuccessInput.fire() }
            onMouseEnter={ () => {
                CheckInput.value = true 
                LookInput.value = (valuex===null?20:valuex)
            }}
            onMouseLeave={
                () => {
                CheckInput.value = false 
                LookInput.value = 20
            }}
        />
    );
}

export const BackgroundAnimated = () => { 
    return (
        <Rive 
            src={globe}
            cover={true}
        />
    )
}