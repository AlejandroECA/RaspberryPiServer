import "./App.css";
import ListTask from "./components/ListTask";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home.component";

function App() {

  const stylesApp = {
    overflow: 'hidden',
    width:'100vw',
    height:'100vh',
    fontFamily:'sans-serif',
  }



  const RoutesPage = () => {
    return (
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="1" element={<ListTask />} />
      </Routes>
    );
  };



  return (
    <div
    style={stylesApp}
    >
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
