import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout(){
    return (
        <>
            <nav className="lease-nav">
                <NavLink to="/dashboard" end className={({isActive}) => isActive ? "lease-active-link" : "lease-inactive-link"}>Dashboard</NavLink>
                <NavLink to="/dashboard/income" className={({isActive}) => isActive ? "lease-active-link" : "lease-inactive-link"}> Income</NavLink>
                <NavLink to="/dashboard/properties" className={({isActive}) => isActive ? "lease-active-link" : "lease-inactive-link"}>Properties</NavLink>
            </nav>
            <Outlet />
        </>
    )
}