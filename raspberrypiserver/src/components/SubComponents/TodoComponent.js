import React, { useState } from "react";


const TodoList = ({points,setPoints}) => {
  
    // ================

    
    
  
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
      if(setToCheck[0].done===true){
          setPoints(points-1)
      }
      else{
        setPoints(points+1)
      }
    };
  
    const ready = "READY... 🙂 ";
    const notReady = "NOT READY ... 👨‍💼 ";
    
  
    return (
        <div
        style={{
            width: '100%',height: '100%', margin:'20px',
            overflow:'scroll',
        }}
        >
          {list.map((x, index) => {
            return (
              <div
                style={{
                  width: "90%",
                  display: "block",
                  paddingTop : "20px",
                
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
    );
  };
  
  export default TodoList;
  