import "/server";
import React from "react";
import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MainLayout from "./src/Layouts/MainLayout"
import Home from "./src/Pages/Home";
import About from "./src/Pages/About";
import Rent from "./src/Pages/Rent/Rent";
import Dashboard from "./src/Pages/Lease/Dashboard";
import Income from "./src/Pages/Lease/Income";
import Properties from "./src/Pages/Lease/Properties";
import DashboardLayout from "./src/Layouts/DashboardLayout";
import Rentdetails from "./src/Pages/Rent/Rentdetail";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="rent" element={<Rent />} />
                    <Route path="rent/:id" element={<Rentdetails />} />
                    
                    <Route path="dashboard" element={<DashboardLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="properties" element={<Properties />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />);