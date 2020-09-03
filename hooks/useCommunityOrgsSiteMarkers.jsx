import React, { useEffect } from 'react';

import { MAP_ACTIONS } from 'components/MapContext';

export function useCommunityOrgsSiteMarkers({ data, dispatchMapState }) {
  useEffect(() => {
    const formattedData = (data || []).map((site) => ({
      pageLink: {
        href: '/community-orgs/[latLng]',
        as: `/community-orgs/${site.coordinates.lat},${site.coordinates.lng}`,
      },
      key: `${site.Name}+${site.coordinates.lat}+${site.coordinates.lng}`,
      outputKey: `${site.Name}+${site.coordinates.lat}+${site.coordinates.lng}`,
      name: site.Name,
      siteInfo: {
        siteName: site.Name,
        type: site.Type,
        purpose: site.Purpose,
        neighborhoodAssociatedWith: site["Neighborhood Associated With"],
        address: site.Location,
        website: site.Website,
        contactInfo: site["Contact Info"]
      },
      coordinates: {
        lat: site.coordinates.lat,
        lng: site.coordinates.lng,
      },
    }));
    dispatchMapState({ type: MAP_ACTIONS.SET_MARKERS, payload: formattedData });

    return () => {
      dispatchMapState({ type: MAP_ACTIONS.CLEAR_MARKERS });
    }
  }, [data]);
}
