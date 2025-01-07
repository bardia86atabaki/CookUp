import React, { createContext, useContext} from 'react';
import useFetchdata from './useFetchdata';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, loading, error] = useFetchdata();

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
