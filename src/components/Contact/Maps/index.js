import React from "react"
import GoogleMapReact from "google-map-react"

import Marker from './Marker'

const Maps = () => {
    const properties = {
        center: {
            lat: 23.778764,
            lng: 90.395279,
        },
        zoom: 16,
    }
    return (
        <div style={{ height: "40vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyDhP4NfEFihjL95QZ--85-VSyhdzwpH11o",
                }}
                defaultCenter={properties.center}
                defaultZoom={properties.zoom}
            >
                <Marker
                    lat = {23.778764} 
                    lng = {90.395279}
                    name="My Marker"
                    color="blue"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Maps
