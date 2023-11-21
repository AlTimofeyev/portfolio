import { useState, createContext, useEffect } from 'react';

export const NavbarPageSelectionContext = createContext();

export const NavbarPageSelectionContextProvider = ({children})  => {
    const [pageSelected, setPageSelection] = useState(() => {
        // Get stored "page selected" values from local storage.
        const savedPageSelection = localStorage.getItem('pageSelected');
        const initialValue = JSON.parse(savedPageSelection);

        return initialValue || [true, false, false, false];
    });

    const setPageSelectionState = (index) => {
        setPageSelection(prevState => prevState.map((pageSelectionState, idx) => idx === index ? true : false));
    }

    useEffect(() => {
        // Save "page selected" values to local storage.
        localStorage.setItem('pageSelected', JSON.stringify(pageSelected));
    }, [pageSelected]);

    return (
        <NavbarPageSelectionContext.Provider value={{ pageSelected, setPageSelectionState }}>
            {children}
        </NavbarPageSelectionContext.Provider>
    );
};

// Context resource used:
// https://www.geeksforgeeks.org/how-to-share-state-across-react-components-with-context/