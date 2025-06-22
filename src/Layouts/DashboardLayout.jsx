import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout(){
    return (
        <>
            <nav className="lease-nav">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/dashboard/income">Income</NavLink>
                <NavLink to="/dashboard/properties">Properties</NavLink>
            </nav>
            <Outlet />
        </>
    )
}