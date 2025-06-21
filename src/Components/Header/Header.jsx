import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <NavLink to="/"><h1><span>Expat</span>nest</h1></NavLink>
            <nav>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/rent">Rent</NavLink>
            </nav>
        </header>
    )
}