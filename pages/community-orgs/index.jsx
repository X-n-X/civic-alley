import React, { useEffect } from 'react';

import { CommunityOrgInfo } from 'components/CommunityOrgInfo';
import { MapContext, MAP_ACTIONS } from 'components/MapContext';
import { getLayout } from 'components/MapLayout';

import { useCommunityOrgsSiteMarkers } from 'hooks/useCommunityOrgsSiteMarkers';

function CommunityOrgsPage() {
  const { dispatch: dispatchMapState } = React.useContext(MapContext);

  const [data, error] = useCommunityOrgsSiteMarkers();

  if (error) {
    console.error('Error loading data from API for /api/community-orgs: ', error);
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
      {!error && data && data.map((orgSite) => (
        <CommunityOrgInfo orgSite={orgSite} key={orgSite.key} />
      ))}
    </div>
  );

}

CommunityOrgsPage.getLayout = getLayout;

export default CommunityOrgsPage;
