import React, { useEffect } from "react";

function Geo_location (props) {

    useEffect(() => {
        
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
            // const { coords } = position;
            props.setLat (position.coords.latitude);
            props.setLon (position.coords.longitude);
          })
        }
    }, [])
}

export default Geo_location;