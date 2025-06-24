import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

export default function Rentdetails(){
    const [property, setProperty] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/properties/${params.id}`)
        .then(res => res.json())
        .then(data => setProperty(data.property))
    },[params.id])


    let bgImageStyle = {}

    if(property?.images?.length > 0)
    {
        bgImageStyle = {
        backgroundImage: `url(".${property.images[0]}")`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "300px",
        width: "400px"};
    }

    return property == null ? 
    (<>
        <NavLink id="back-btn" to="/rent">...Back</NavLink>
            <section className="content-section">
                <h1>Loading...</h1>
            </section>

    </>) :
    (
        <>
            <NavLink id="back-btn" to="/rent">...Back</NavLink>
            <section className="content-section">
                <div className="property-content">
                    <div id="property-details-images" style={bgImageStyle}></div>
                    <div>
                        <h2>{property.title}</h2>
                        <p>Available from: {property.availableFrom}</p>
                    </div>
                </div>
            </section>
        </>
    )
}