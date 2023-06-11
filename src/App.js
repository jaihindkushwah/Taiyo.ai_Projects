import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./scenes/sidebar/SideBar";
import TopBar from "./scenes/topbar/TopBar";
import ContactPage from "./scenes/contact/ContactPage";
import MapAndChartPage from "./scenes/map&chart/MapAndChartPage";
import { collapseContext } from "./collapseContext/collapseContext";
import { useState } from "react";

function App() {
  const [isCollapse,setCollapse]=useState(false);
  return (
    <BrowserRouter>
    <collapseContext.Provider value={{isCollapse,setCollapse}}>
      <div className="App flex items-center w-screen h-full bg-red-300">
        <SideBar/>
        <div className="flex flex-col justify-start w-full h-full">
          <TopBar/>
          <div className="">
              <Routes>
                <Route path="/" element={<ContactPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/mapandchart" element={<MapAndChartPage/>}/>
              </Routes>
            </div>
        </div>
      </div>
    
    </collapseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
