import './App.css'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx";
import MainLayout from "./components/layout/MainLayout.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
