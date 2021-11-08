import React, { useState, useRef } from "react";
// import {
//   BackgroundAnimated,
//   Example,
//   Teddy,
// } from "./Rive-Components/RiveComponents";
import useMouse from "@react-hook/mouse-position";

const ListTask = (a) => {
  //TODO: how to make this working with all the useStates

  const list2 = [
    {
      title: "Create the TODO",
      description: "make the TODO - improve the code ",
    },
    {
      title: "check the library",
      description: "Youtube - Rive",
    },
    {
      title: "check docker ",
      description: "functionality and run local",
    },
    {
      title: "circleci",
      description: "check config.yml to adept complete to the code",
    },
    {
      title: "Jest",
      description: "generate tests config in jest to add in circleci",
    },
  ];

  const createList = (a) => {
    let b = [];
    a.map((x, index) => {
      x = {
        ...x,
        id: index,
        done: "done" + index,
        function: "setdone" + index,
      };
      b = [...b, x];
    });
  };

  createList(list2);

  // ================

  const ref = useRef(null)
  const mouse =  useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  const [done0, setDone0] = useState(false);
  const [done1, setDone1] = useState(false);
  const [done2, setDone2] = useState(false);
  const [done3, setDone3] = useState(false);
  const [done4, setDone4] = useState(false);

  const list = [
    {
      id: 0,
      title: "Create the TODO",
      description: "make the TODO - improve the code ",
      done: done0,
      function: setDone0,
    },
    {
      id: 1,
      title: "check the library",
      description: "Youtube - Rive",
      done: done1,
      function: setDone1,
    },
    {
      id: 2,
      title: "check docker ",
      description: "functionality and run local",
      done: done2,
      function: setDone2,
    },
    {
      id: 3,
      title: "circleci",
      description: "check config.yml to adept complete to the code",
      done: done3,
      function: setDone3,
    },
    {
      id: 4,
      title: "Jest",
      description: "generate tests config in jest to add in circleci",
      done: done4,
      function: setDone4,
    },
  ];

  const handleClick = async (number) => {
    let setToCheck = list.filter((x) => x.id === number);
    setToCheck[0].function(!setToCheck[0].done);
  };

  const ready = "READY... 🙂 ";
  const notReady = "NOT READY ... 👨‍💼 ";

  const [ligth, setLigth] = useState(true);
  const [colorBack, setColorBack] = useState('rgb(3,15,22)');
  const [colorFont, setColorFont] = useState('white');

    // useEffect(() => {

    //     if(!ligth){
    //     setColorBack('rgb(43,24,62)')
    //     setColorFont('yellow')}
    //     else{
    //     setColorBack('rgb(174,240,253)')
    //     setColorFont('purple')
    //     }
        
    // // We listen for changes to the rive object. The rive object will be null
    // // until the rive file has loaded.
    // }, [ligth]);

    // console.log(ligth);

    // const handleLigth= async () => {
    //     setLigth(!ligth)
    // };


    
  return (
    <div 
    style={{
        width: "100vw",
        height: "100vh",
        PaddingTop : "50px",
        // zIndex: 1,
        background:colorBack,
        color: colorFont
      //   paddingLeft:'100%'
      //   paddingTop: "25vh",

      }}

    >
      {/* <div
        style={{
          width: "100vw",
          height: "25vh",
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "rgb(216,226,233)",
        }}
      >
        <Teddy 
            fit
            valuex={mouse.x}
            style={{paddingTop:'15px'}}
            />
      </div> */}

    <div
      // onClick={ () => handleLigth() }
    >

    </div>

      <div
        style={{
          width: "90%",
          paddingTop : "50px",
          paddingLeft : "30px"

          // zIndex: 1,
          // position: "absolute",
          // top: "30vh",
          // left: 0,
        }}
      >
        {list.map((x, index) => {
          return (
            <div
              style={{
                width: "90vw",
                display: "block",
                PaddingTop : "50px",

                // margin: "10px",
                // zIndex: 12,
              }}
              key={x.id}
            >
              <div id={x.id}>
                {" "}
                {x.id} - {x.title.toUpperCase()} -- Description: {x.description}
                {"\n"}{" "}
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "inline-flex",
                  justifyContent: "left",
                }}
              >
                <input
                  style={{ margin: "7px" }}
                  type="checkbox"
                  onClick={() => handleClick(x.id)}
                />
                <div>{x.done ? ready : notReady}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListTask;
