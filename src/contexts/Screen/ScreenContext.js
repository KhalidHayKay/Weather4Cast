import { createContext, useEffect, useState } from "react";

const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
    const [screen, setScreen] = useState({
        width: document.documentElement.clientWidth, 
        height: document.documentElement.clientHeight
    });

    useEffect(() => {
        const updateScreen = () => {
            setScreen({
                width: document.documentElement.clientWidth, 
                height: document.documentElement.clientHeight
            });
        };

        updateScreen();
          
        window.addEventListener('resize', updateScreen);

        return () => {
            window.removeEventListener('resize', updateScreen);
        }
    }, []);

    return <ScreenContext.Provider
        value={{screen}}
    >
        {children}
    </ScreenContext.Provider>
}

export default ScreenContext;