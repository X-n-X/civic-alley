import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router'

import { getLayout } from 'components/MapLayout';
import { MapContext, MAP_ACTIONS } from 'components/MapContext';
import { CommunityOrgInfo } from 'components/CommunityOrgInfo';

import { useCommunityOrgsSiteMarkers } from 'hooks/useCommunityOrgsSiteMarkers';

import { getLatLngFromPath } from 'lib/getLatLngFromPath.js';

const CommunityOrgPage = () => {
  const router = useRouter()
  const { latLng } = router.query
  const coordinates = useMemo(() => getLatLngFromPath(latLng), [latLng]);

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

  useEffect(() => {
    dispatchMapState({
      type: MAP_ACTIONS.SET_ACTIVE_MARKER,
      payload: coordinates,
    });

    return () => {
      dispatchMapState({ type: MAP_ACTIONS.CLEAR_ACTIVE_MARKER });
    }
  }, [coordinates]);

  const filteredItems = useMemo(
    () => {
      return Array.isArray(data)
        ? data.filter(
          (site) => site.coordinates.lat === coordinates.lat
            && site.coordinates.lng === coordinates.lng
        )
        : []
    },
    [data, coordinates],
  );

  return (
    <div>
      {error && 'Error loading content'}
      {!data && !error && 'Loading...'}
      {!error && filteredItems && filteredItems.map((communityOrg) => (
        <CommunityOrgInfo orgSite={communityOrg} key={communityOrg.key} />
      ))}
    </div>
  )
}

CommunityOrgPage.getLayout = getLayout;

export default CommunityOrgPage;
