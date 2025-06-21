import React from "react";
import { NavLink } from "react-router-dom";

export default function Home(){
    return(
        <section className="content-section">
            <div id="home-content">
                <div id="home-card">
                    <h1>Find Your Perfect Home Abroad</h1>
                    <p>Welcome to <span>Expat</span>nest, the trusted platform for expats searching for rental properties 
                    around the world. Whether you're relocating for work, study, 
                    or adventure, we make it easy to discover safe, comfortable, 
                    and affordable homes tailored to your needs. Browse verified listings, compare neighborhoods, 
                    and connect with landlords who understand the expat experience. 
                    <br></br>
                    Start your journey today—your new home is: <span id="link-span"><NavLink to="/rent">Just a click away!</NavLink></span>
                    </p>
                </div>
            </div>
        </section>
    )
}