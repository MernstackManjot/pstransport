import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OutLet } from "./Layout/OutLet";
import { HomePage } from "./Pages/HomePage";
import { About } from "./Pages/About";
import { Service } from "./Pages/Services";
import { Contact } from "./Pages/Contact";
import { DriverRegistration } from "./Pages/DriverRegistration";
import { VehicleRegistration } from "./Pages/VehicleRegistration";



function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
            <Route path="/" element={<OutLet/>}> 
            <Route index  element={<HomePage/>} />
            <Route path="/about"  element={<About/>} /> 
            <Route path="/service"  element={<Service/>} /> 
            <Route path="/contact"  element={<Contact/>} /> 
            <Route path="/DriverRegistration"  element={<DriverRegistration/>} /> 
            <Route path="/VehicleRegistration"  element={<VehicleRegistration/>} /> 
  

            
            </Route>
            


          
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
