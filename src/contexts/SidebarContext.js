import { createContext, useContext } from "react";

export const SidebarContext = createContext(undefined);

export function useSidebarContext() {
    const sidebarContext = useContext(SidebarContext);

    // if SidebarContext.Provider wasn't used.
    if (sidebarContext === undefined || sidebarContext === null) {
        throw new Error('useSidebarContext must be used with a SidebarContext.')
    };

    // if boolean, number, string, function, etc.
    if (typeof sidebarContext !== 'object') {
        throw new Error('SidebarContext must have an object value of {}.')
    };

    for (var prop in sidebarContext) {
        if (Object.prototype.hasOwnProperty.call(sidebarContext, prop)) {
            return sidebarContext;
        }
    };

    throw new Error('SidebarContext must have an object value of {} with length > 0.');
};

// Resources used for this:
// https://youtu.be/HYKDUF8X3qI?si=JH2lsN8kdWSx3fsf
// https://stackoverflow.com/a/4994244/17047816
// https://stackoverflow.com/a/60703369/17047816
// https://stackoverflow.com/a/57840799/17047816
// https://stackoverflow.com/a/65531707/17047816
// https://dmitripavlutin.com/react-forwardref/