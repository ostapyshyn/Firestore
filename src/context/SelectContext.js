import { useState, createContext, useMemo } from 'react';

const SelectContext = createContext();

const SelectProvider = (props) => {
  const [select, setSelect] = useState('all');

  const value = useMemo(() => ({ select, setSelect }), [select]);

  return <SelectContext.Provider value={value}>{props.children}</SelectContext.Provider>;
};
export { SelectContext, SelectProvider };
