import React from "react";

import Contact from "./Contact";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
            defaultOptions={{
                scrollwheel: false,
                zoomControl: true
            }}>
            <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
        </GoogleMap>
    ))
);

function Maps({ ...prop }) {
    return (
        <div className="maps">
            <div className="map">
                <CustomMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKFWBqlKAGCeS1rMVoaNlwyayu0e0YRes"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
            <Contact />
        </div>
    );
}

export default Maps;
