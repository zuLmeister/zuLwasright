import React from "react";
import "./index.css";
import Body from "./Body";
import Login from "./Login";
import Header from "./Header";
import Awalan from "./Footer";
import About from "./About";
import Services from "./Services";
import Contacts from "./Contacts";
import reportWebVitals from "./reportWebVitals";
import {Routes,Route} from "react-router-dom";

export default function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/Home" element={<Body />  } />
                <Route path="/About" element={<About /> } />
                <Route path="/Services" element={<Services /> } />
                <Route path="/Contacts" element={<Contacts /> } />
                <Route path="/Login" element={<Login /> } />
            </Routes>
            <Awalan/>
            
        
        </>
    );
}