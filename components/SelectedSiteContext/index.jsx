import React from 'react';

/*
this will be set to something like this later:
selectedSite = {
  name: 'some site name',
  coordinates: { lat, long },
}
*/

export const SelectedSiteContext = React.createContext(null);

export function SelectedSiteContextProvider({ children }) {
  const [selectedSite, setSelectedSite] = React.useState([]);

  const selectedSiteState = React.useMemo(() => {
    return {
      selectedSite,
      setSelectedSite,
    };
  }, [selectedSite, setSelectedSite]);

  return (
  <SelectedSiteContext.Provider value={selectedSiteState}>
    {children}
  </SelectedSiteContext.Provider>
  );
}
