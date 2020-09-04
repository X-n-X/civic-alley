import { useMemo } from 'react';
import useSwr from 'swr';

import { jsonFetcher } from 'lib/fetcher';

export function useCovidTestingSitesMarkers() {
  const { data, error } = useSwr('/api/testing-sites', jsonFetcher);

  const formattedData = useMemo(() => {
    console.log('useCovidTestingSitesMarkers, using effect?')
    return Array.isArray(data)
      ? (
        data.map((site) => ({
          pageLink: {
            href: '/covid-testing-sites/[latLng]',
            as: `/covid-testing-sites/${site.coordinates.lat},${site.coordinates.lng}`,
          },
          key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
          output_key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
          name: site.site_name,
          site_info: {
            name: site.site_name,
            provider_url: site.provider_url,
            additional_info: site.additional_info,
            address: site.address,
            phone: site.phone,
            hours: {
              monday: site.monday,
              tuesday: site.tuesday,
              wednesday: site.wednesday,
              thursday: site.thursday,
              friday: site.friday,
              saturday: site.saturday,
              sunday: site.sunday,
            },
            screening_required: site.screening_required,
            appointment_required: site.appointment_required,
            antibody_testing: site.antibody_testing,
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
