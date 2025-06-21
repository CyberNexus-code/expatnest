import React from "react";
import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Layout from "./src/Layouts/Nav"
import Home from "./src/Pages/Home";
import About from "./src/Pages/About";
import Rent from "./src/Pages/Rent";
import "/server";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/rent" element={<Rent />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />);