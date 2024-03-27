import { useState, createContext, useEffect } from 'react';

export const ColorSchemeContext = createContext();

export const ColorSchemeContextProvider = ({ children }) => {
    // If light scheme is True, use light schemee, else use dark scheme.
    // Light scheme is used by default.
    const [lightSchemeSelected, setLightScheme] = useState(() => {
        const savedColorScheme = localStorage.getItem('lightScheme');
        const initialValue = JSON.parse(savedColorScheme);

        return initialValue || true;
    })

    useEffect(() => {
        // Save "light scheme selected" value to local storage.
        localStorage.setItem('lightScheme', JSON.stringify(lightSchemeSelected));
    }, [lightSchemeSelected]);


    return (
        <ColorSchemeContext.Provider value={{ lightSchemeSelected, setLightScheme }}>
            {children}
        </ColorSchemeContext.Provider>
    );
};