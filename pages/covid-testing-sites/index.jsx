import React, { useEffect } from 'react';

import { MapContext, MAP_ACTIONS } from 'components/MapContext';
import { TestingSiteInfo } from 'components/TestingSiteInfo';
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
            <TestingSiteInfo
              key={site.key}
              site={site}
            />
          ))}
        </div>
      )}
    </div>
  );

}

CovidTestingSitesPage.getLayout = getLayout;

export default CovidTestingSitesPage;
