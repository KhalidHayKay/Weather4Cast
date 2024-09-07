import { createContext, useEffect, useState } from "react";
import { handleError } from "./LocationAction";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [browserLocation, setBrowserLocation] = useState(null);
    const [location, setLocation] = useState(null);
    const [isBrowser, setIsBrowser] = useState(true);

    useEffect(() => {
        const getCurrentLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const timestamp = position.timestamp;
        
                        setBrowserLocation({latitude, longitude, timestamp});
                        setLocation({latitude, longitude, timestamp});
                    }, 
                    handleError
                );
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        getCurrentLocation();
    }, []);

    return <LocationContext.Provider 
        value={{
            browserLocation,
            location,
            setLocation,
            isBrowser, 
            setIsBrowser
        }}
    >
        {children}
    </LocationContext.Provider>
}

export default LocationContext;