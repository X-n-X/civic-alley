import React, { useEffect } from 'react';
import Link from 'next/link';

import { MapContext, MAP_ACTIONS } from 'components/MapContext';
//import { TestingSiteInfo } from 'components/TestingSiteInfo';
import { InfoLink } from 'components/InfoLink';
import { getLayout } from 'components/MapLayout';

import { useCovidTestingSitesMarkers } from 'hooks/useCovidTestingSitesMarkers';

function CovidTestingSitesPage() {
  const { dispatch: dispatchMapState } = React.useContext(MapContext);
  const [data, error] = useCovidTestingSitesMarkers();

  if (error) {
    console.error('Error loading data from API for /api/testing-sites: ', error);
  }

  useEffect(() => {
    if (data && !error) {
      dispatchMapState({ type: MAP_ACTIONS.SET_MARKERS, payload: data });
    }
  }, [data, error]);

  return (
    <div className="sidebar-content">
      {error && 'Error loading content'}
      {!data && !error && 'Loading...'}
      {!error && data && (
        <div>
          {data.map((site) => (
            //BUILD OUR OWN COMPONENT IN THE COMPONENTS FOLDER WITH AN A TAG THAT HAS THE LINK TO THE SPECIFIC PAGE.
            //THEN MAKE OUR O
            //pair this info down so its only a name and an address together with some background to differentiate
            //then make
            <InfoLink
              key={site.key}
              site={site}              
            />            
            // <Link
            //   href={site.pageLink.href}
            //   as={site.pageLink.as}
            // ></Link>     
          ))}
        </div>
      )}
    </div>
  );

}

CovidTestingSitesPage.getLayout = getLayout;

export default CovidTestingSitesPage;
