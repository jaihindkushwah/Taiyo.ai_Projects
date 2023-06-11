import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./scenes/sidebar/SideBar";
import TopBar from "./scenes/topbar/TopBar";
import ContactPage from "./scenes/contact/ContactPage";
import MapAndChartPage from "./scenes/map&chart/MapAndChartPage";
import { collapseContext } from "./collapseContext/collapseContext";
import { useState } from "react";
import CreateContactPage from "./scenes/contact/CreateContactPage";
import EditContactPage from "./scenes/contact/EditContactPage";

function App() {
  const [isCollapse,setCollapse]=useState(true);
  return (
    <BrowserRouter>
    <collapseContext.Provider value={{isCollapse,setCollapse}}>
      <div className="App flex items-center w-98/100 h-full bg-red-100">
        <SideBar/>
        <div className="flex flex-col justify-start min-h-screen w-full">
          <TopBar/>
          <div className="w-full">
              <Routes>
                <Route path="/" element={<ContactPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/createcontact" element={<CreateContactPage/>} />
                <Route path="/editcontact/:id" element={<EditContactPage/>} />
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
