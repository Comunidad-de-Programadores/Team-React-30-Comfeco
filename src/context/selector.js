import React, { useState, createContext, useContext } from 'react';

const SelectorContext = createContext({
    selectedView: '',
    goTo: () => {}
});

export const useSelector = () => useContext(SelectorContext);

const SelectorProvider = ({ children }) => {
    const [selected, setSelected] = useState('');

    const goTo = viewName => setSelected(viewName);

    return (
      <SelectorContext.Provider value={{ selectedView: selected, goTo }}>
        { children }
      </SelectorContext.Provider>
    );
};

export default SelectorProvider;
