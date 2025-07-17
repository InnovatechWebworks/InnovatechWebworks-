import { createContext } from 'react';

const LocomotiveScrollContext = createContext({ scroll: null });

export const LocomotiveScrollProvider = ({ children, value }) => {
  return (
    <LocomotiveScrollContext.Provider value={value}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
};

export default LocomotiveScrollContext;
