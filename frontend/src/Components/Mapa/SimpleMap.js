import React, { Component } from 'react';


// components:
import Marker from './Marker';

// examples:
import GoogleMap from './GoogleMap';

// consts
const CDMX = [19.42, -99.12];

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
        bounds.extend(new maps.LatLng(
            place.latitude,
            place.longitude,
        ));
    });
    return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
    });
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
};

class Mapa extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            places: props.properties ? props.properties : [],
        };
    }

    

    render() {
        const { places } = this.state;
        console.log("rendering", places)
        return (
            <div style={{ height: '50vh', width: '100%' }}>
                { (
                    <GoogleMap
                        _defaultZoom={13}
                        defaultCenter={CDMX}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
                    >
                        {places.map((property) => (
                            <Marker
                                
                                key={property.id}
                                text={property.name}
                                lat={property.latitude}
                                lng={property.longitude}
                            />
                        ))}
                    </GoogleMap>
                )}
            </div>
        );
    }
}

export default Mapa;