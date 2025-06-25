import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function Rent(){
    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch("/api/properties")
        .then(res => res.json())
        .then(data => setProperties(data.properties))
    },[])

    console.log(properties)

    const renderPoperties = properties.map(p => (
        <div key={p.id} className="property-card">
            <NavLink to={`/rent/${p.id}`} className="card-content">
                <img className="prop-thumb" src={p.images[0]}/>
                <h3>{p.title}</h3>
                <div className="spacer" />
                <div className="prop-details">
                    <p>City: {p.address.city}</p>
                    <p>Province: {p.address.province}</p>
                    <p>Bedrooms: {p.bedrooms}</p>
                    <p>Rent: € {p.rent}</p>
                </div>
            </NavLink>
        </div>
    ))

    return (
        <section id="content-section">
            <h1 id="rent-header">Properties to Rent:</h1>
            <div className="prop-grid">
                {renderPoperties}
            </div>
        </section>
    )
}