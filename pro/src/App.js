 import React from "react";
 import {Routes,Route} from 'react-router-dom'
 import Home from './Home'
 
 import About from "./about";
 import Login from "./login";
 import Register from "./register"

function App() {
  return (
 <>
   <Home/>
   <Routes>
         <Route path="/" element={<About/>}/>
         <Route path='/register' element={<Register/>}/>
          
         <Route path="/login" element={<Login/>}/>
    </Routes>
</>
  );
}

export default App;
