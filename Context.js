import React, { useState, createContext } from 'react';

export const Context = createContext();

export const ContextMenu = props => {
    const [active, setActive] = useState(false);
    return (
        <Context.Provider value={[active, setActive]}>
            {props.children}
        </Context.Provider>
    );
};
