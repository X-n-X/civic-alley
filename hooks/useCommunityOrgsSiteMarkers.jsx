import { useMemo } from 'react';
import useSwr from 'swr';

import { jsonFetcher } from 'lib/fetcher.js';

export function useCommunityOrgsSiteMarkers() {
  const { data, error } = useSwr('/api/community-orgs', jsonFetcher);

  const formattedData = useMemo(() => {
    if (!data) return data;
    return Array.isArray(data)
      ? (
        data.map((site) => ({
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
        }))
      )
      : data;
  }, [data]);

  return [formattedData, error];
}
