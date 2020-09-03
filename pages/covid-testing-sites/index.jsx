import React from 'react';
import useSwr from 'swr';

import { MapContext } from 'components/MapContext';
import { TestingSiteInfo } from 'components/TestingSiteInfo';
import { getLayout } from 'components/MapLayout';

import { useCovidTestingSitesMarkers } from 'hooks/useCovidTestingSitesMarkers';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function CovidTestingSitesPage() {
  const { mapState, dispatch: dispatchMapState } = React.useContext(MapContext);
  const { data, error } = useSwr('/api/testing-sites', fetcher);
  if (error) {
    console.error('Error loading data from API for /api/testing-sites: ', error);
  }

  useCovidTestingSitesMarkers({ data, dispatchMapState });

  return (
    <div className="sidebar-content">
      {error && 'Error loading content'}
      {!data && !error && 'Loading...'}
      {/* {!error && data && "data here"} */}
      {!error && data && (
        <div>
          {mapState.markers.map((site) => (
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
