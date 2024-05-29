import './App.css'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx";
export  default function App() {
  return (
   <BrowserRouter>
       <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
       </Routes>
   </BrowserRouter>
  )
}
