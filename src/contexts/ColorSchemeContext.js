import { useState, createContext, useEffect } from 'react';

export const ColorSchemeContext = createContext();

export const ColorSchemeContextProvider = ({ children }) => {
    // If light scheme is True, use light scheme, else use dark scheme.
    // Light scheme is used by default.
    const [lightSchemeSelected, setLightScheme] = useState(() => {
        const savedColorScheme = localStorage.getItem('lightScheme');
        const initialValue = savedColorScheme ? JSON.parse(savedColorScheme) : true;    // If 'lightScheme' doesn't exist, then set light scheme to True by default.

        return initialValue;
    })

    useEffect(() => {
        // Update root css variables.
        if(lightSchemeSelected) {
            // Light Mode
            document.documentElement.style.setProperty('--background', '#fffbf0');
            document.documentElement.style.setProperty('--foreground', '#351d40');
            document.documentElement.style.setProperty('--neutral', '#7c7580');
            document.documentElement.style.setProperty('--primary', '#fde06c');
            document.documentElement.style.setProperty('--secondary', '#fff0b3');
            document.documentElement.style.setProperty('--accent', '#4b006e');
            document.documentElement.style.setProperty('--accent-support', '#d8c2f2');
            document.documentElement.style.setProperty('--accent-support2', '#9069bf');
        }
        else {
            // Dark Mode
            document.documentElement.style.setProperty('--background', '#302933');
            document.documentElement.style.setProperty('--foreground', '#fff9e6');
            document.documentElement.style.setProperty('--neutral', '#ccc6ba');
            document.documentElement.style.setProperty('--primary', '#351d40');
            // document.documentElement.style.setProperty('--secondary', '#4e1a66');   // Original secondary
            document.documentElement.style.setProperty('--secondary', '#7851a9');
            document.documentElement.style.setProperty('--accent', '#f2bf18');
            document.documentElement.style.setProperty('--accent-support', '#a68729');
            document.documentElement.style.setProperty('--accent-support2', '#fde06c');
        }

        // Save "light scheme selected" value to local storage.
        localStorage.setItem('lightScheme', JSON.stringify(lightSchemeSelected));
    }, [lightSchemeSelected]);


    return (
        <ColorSchemeContext.Provider value={{ lightSchemeSelected, setLightScheme }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};