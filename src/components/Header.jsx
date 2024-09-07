import { format } from "date-fns";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import LocationContext from "../contexts/location/LocationContext";
import ScreenContext from "../contexts/Screen/ScreenContext";
import Search from "./Search";
import { getTimezone, searchLocation } from "../contexts/search/SearchAction";
import ThemeController from "./setting/ThemeController";

const Header = () => {
    const { isBrowser, setIsBrowser, location, setLocation, browserLocation } = useContext(LocationContext);
    const { screen } = useContext(ScreenContext);
    const [region, setRegion] = useState(null);
    const [searchIsClicked, setSearchIsClicked] = useState(false);
    
    useEffect(() => {
        const getRegion = async () => {
            const {name, country} = await searchLocation(`${location.latitude}, ${location.longitude}`);
            const {localtime} = await getTimezone(location.latitude, location.longitude);

            const regionObj = {
                name,
                country,
                timestamp: new Date(localtime).getTime(),
            }

            setRegion(regionObj);
        }

        location && getRegion();
    }, [location]);

    return (
        <header className="grid sm:gap-y-0 lg:flex lg:justify-between pt-2 pb-7 gap-y-5 md:gap-y-0">
            <div className="w-full col-span-2 text-primary-content flex flex-col sm:flex-row items-start sm:items-center sm:divide-x divide-primary-content px-1">
                <div className="w-full sm:pr-5 flex flex-row-reverse md:flex-row items-center justify-between gap-x-2 md:gap-x-3">
                    <div 
                        onClick={() => {
                            setLocation(browserLocation);
                            setIsBrowser(true);
                        }} 
                        className={`${! isBrowser ? 'bg-red-200' : 'bg-secondary'} cursor-pointer rounded-full size-8 flex items-center justify-center`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    {region ? 
                        <div className="flex flex-col sm:flex-row gap-x-1">  
                            <h4 className="text-2xl sm:text-base">{region.name + (screen.width >= 640 ? ',' : ',')}</h4>
                            <h4 className="">{region.country === 'United States of America' ? 'USA' : region.country}</h4> 
                        </div> : 
                    <p>Loading...</p>}
                </div>
                <p className="text-sm md:text-base pt-2 md:pt-0 md:pl-5 w-full">{region ? format(region.timestamp, 'iii, d MMM, y') : 'Loading date...'}</p>
                {/* h:m a */}
            </div>

            <div className="h-fit row-start-1 col-start-1 col-span-2">
                <Search clickState={{searchIsClicked, setSearchIsClicked}} />
            </div>

            <motion.div 
                animate={{display: searchIsClicked ? 'none' : 'flex'}}
                transition={{duration: 0.5, ease: 'linear'}}

                className="h-fit row-start-1 col-start-2 justify-self-end flex flex-row sm:flex-row items-end sm:items-center justify-between sm:justify-center gap-x-2.5 px-1"
            >
                <ThemeController screen={screen} />
                <div>
                    <button className="text-sm md:text-base bg-accent size-7 md:size-8 rounded-lg md:rounded-full font-bold">
                        &deg;C
                    </button>
                </div>
            </motion.div>

        </header>
    );
}
 
export default Header;