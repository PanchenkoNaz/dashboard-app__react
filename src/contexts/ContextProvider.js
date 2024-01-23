import { colGroup } from '@syncfusion/ej2-react-grids';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// in the Navbar
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

// is a basic react declare to return the statecontext provider 
export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined); // undefined because I dont know the screen Size yet
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false); // is this Sidebar ThemeSettings currently open or closed

    // setting it to  specific mode
    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false);
    };

    // setting it to a specific color
    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem('colorMode', color)
        setThemeSettings(false);
    };

    /** setIsClicked is an object (initialState) and we cannot just override the object with a string 
     * -> so we need to open up the object spread the initialState meaning where everything is false 
     * and then inside of square brackets only change the vsalue that has been clicked
     * and set it to true 
    */
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider
            // value property passed to all of the components in this application
            // is our sidebar currently open or is it closed?
            value={{ 
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                handleClick,
                screenSize, setScreenSize,
                currentColor, setCurrentColor,
                currentMode, setCurrentMode,
                themeSettings, setThemeSettings,
                setColor, setMode,
                initialState,
            }}
        >
            {/* always return children inside of it / whatever is inside the context will be displayed (rendered) */}
            {children}
        </StateContext.Provider>
    )
}
// passing in which context I want to use
// one context in this app
export const useStateContext = () => useContext(StateContext)