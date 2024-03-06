// PropertiesContext.jsx
import React, { createContext, useState, useContext } from 'react';

const PropertiesContext = createContext();

export const useProperties = () => useContext(PropertiesContext);

export const PropertiesProvider = ({ children }) => {
    const [selectedProperty, setSelectedProperty] = useState(null);

    return (
        <PropertiesContext.Provider value={{ selectedProperty, setSelectedProperty }}>
            {children}
        </PropertiesContext.Provider>
    );
};
