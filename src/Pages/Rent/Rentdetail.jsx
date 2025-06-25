import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

export default function Rentdetails(){
    const [p, setProperty] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/properties/${params.id}`)
        .then(res => res.json())
        .then(data => setProperty(data.property))
    },[params.id])


    let bgImageStyle = {}

    if(p?.images?.length > 0)
    {
        bgImageStyle = {
        backgroundImage: `url("${p.images[0]}")`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "300px",
        width: "90vw"};
    }

    return p == null ? 
    (<>
        <NavLink id="back-btn" to="/rent">...Back</NavLink>
            <section className="content-section">
                <h1>Loading...</h1>
            </section>
    </>) :  (
            <>
                <NavLink id="back-btn" to="/rent">...Back</NavLink>
                <section className="content-section">
                    <div className="property-content">
                        <div id="property-details-images" style={bgImageStyle}></div>
                        <div>
                            <h2>{p.title}</h2>
                            <div className="details-type-container">
                                <p className="details-type">{p.type}</p>
                                <p>Available from: {p.availableFrom}</p>
                            </div>
                            <div className="details-container-2">
                                <div className="details-container-2-left">
                                    <p>Rent: € {p.rent}</p>
                                    <p>Bedrooms: {p.bedrooms}</p>
                                    <p>Bathrooms: {p.bathrooms}</p>
                                </div>
                                <div className="details-container-2-right">
                                    <p>Size: {p.sizeSqM} m²</p>
                                    <p>Energy Label: {p.energyLabel}</p>
                                    <p>Furnished: {p.bathrooms}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            )
}