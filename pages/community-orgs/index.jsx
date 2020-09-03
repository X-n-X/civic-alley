import React from 'react';
import useSwr from 'swr';

import { CommunityOrgInfo } from 'components/CommunityOrgInfo';
import { MapContext } from 'components/MapContext';
import { getLayout } from 'components/MapLayout';

import { useCommunityOrgsSiteMarkers } from 'hooks/useCommunityOrgsSiteMarkers';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function CommunityOrgsPage() {
  const { mapState: { markers }, dispatch: dispatchMapState } = React.useContext(MapContext);
  const { data, error } = useSwr('/api/community-orgs', fetcher);
  if (error) {
    console.error('Error loading data from API for /api/community-orgs: ', error);
  }

  useCommunityOrgsSiteMarkers({ data, dispatchMapState });

  return (
    <div className="sidebar-content">
      {error && 'Error loading content'}
      {!data && !error && 'Loading...'}
      {/* {!error && data && "data here"} */}
      {!error && data && markers.map((orgSite) => (
        <CommunityOrgInfo orgSite={orgSite} key={orgSite.key} />
      ))}
    </div>
  );

}

CommunityOrgsPage.getLayout = getLayout;

export default CommunityOrgsPage;
