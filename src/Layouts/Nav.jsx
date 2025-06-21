import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

export default function Nav(){
    return (
        <div className="layout-wrapper">
            <Header />
            <main className="content-wrapper">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}