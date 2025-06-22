import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <NavLink to="/"><h1><span>Expat</span>nest</h1></NavLink>
            <nav>
                <NavLink to="/dashboard" className={({isActive}) => isActive ? "header-active-link" : null}>Lease</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "header-active-link" : null}>About</NavLink>
                <NavLink to="/rent" className={({isActive}) => isActive ? "header-active-link" : null}>Rent</NavLink>
            </nav>
        </header>
    )
}