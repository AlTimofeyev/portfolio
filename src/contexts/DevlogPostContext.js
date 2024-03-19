import { useState, createContext } from 'react';

export const DevlogPostContext = createContext();

export const DevlogPostContextProvider = ({ children }) => {
    const [devlogPostReadMoreOpened, setdevlogPostReadMoreOpened] = useState(false);

    return (
        <DevlogPostContext.Provider value={{ devlogPostReadMoreOpened, setdevlogPostReadMoreOpened }}>
            {children}
        </DevlogPostContext.Provider>
    );
};