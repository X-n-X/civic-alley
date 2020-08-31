import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router'

import { getLayout } from 'components/MapLayout';
import { MapMarkersContext } from 'components/MapMarkersContext';
import { MapContext, MAP_ACTIONS } from 'components/MapContext';

import useSwr from 'swr';
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then(res => res.json());

const latLongRegex = /^([-\d.]+),([-\d.]+)$/
const getLatLongFromPath = (path) => {
  const match = latLongRegex.exec(path) || []
  return {
    lat: parseFloat(match[1]),
    lng: parseFloat(match[2]),
  }
}

const TestingSitePage = () => {
  const router = useRouter()
  const { testingSite } = router.query

  const coordinates = useMemo(() => getLatLongFromPath(testingSite), [testingSite]);

  const { dispatch } = React.useContext(MapContext);
  useEffect(() => {
    dispatch({ action: MAP_ACTIONS.SET_CENTER, payload: coordinates });
  }, [coordinates]);

  const [formattedFilteredData, setFormattedFilteredData] = useState([]);

  const { setState: setMapMarkers } = React.useContext(MapMarkersContext);
  const { data, error } = useSwr('/api/testing-sites', fetcher);

  if (error) {
    console.error('Error loading data from API for /api/testing-sites: ', error);
  }

  useEffect(() => {
    const formattedData = (data || []).map((site) => ({
      key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
      output_key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
      name: site.site_name,
      site_info: {
        name: site.site_name,
        provider_url: site.provider_url,
        additional_info: site.additional_info,
        address: site.address,
        phone: site.phone,
        monday: site.monday,
        tuesday: site.tuesday,
        wednesday: site.wednesday,
        thursday: site.thursday,
        friday: site.friday,
        saturday: site.saturday,
        sunday: site.sunday,
        screening_required: site.screening_required,
        appointment_required: site.appointment_required,
        antibody_testing: site.antibody_testing,
      },
      coordinates: {
        lat: site.coordinates.lat,
        lng: site.coordinates.lng,
      },
    }));

    const filteredData = formattedData.filter((site) => (
      site.coordinates.lat === coordinates.lat && site.coordinates.lng === coordinates.lng
    ))
    dispatch({ action: MAP_ACTIONS.SET_MARKERS, payload: formattedData });
    setFormattedFilteredData(filteredData)
  }, [data, setMapMarkers, setFormattedFilteredData]);

  console.log('ffData: ', formattedFilteredData)

  return (
    <div>
      {formattedFilteredData.map((testingSite) => {
        const { site_info } = testingSite
        return (
          <p key={`${testingSite.name}+${testingSite.coordinates.lat}+${testingSite.coordinates.lng}`}>
            Address: {site_info.address} <br></br>
            {site_info.phone ? `Phone Number: ${site_info.phone}` : ''}{site_info.phone ? <br /> : ''}
            You are {site_info.appointment_required ? 'required' : 'not required'} to have an appointment to get tested.<br></br>
          This testing site {site_info.antibody_testing ? 'provides' : 'does not provide'} antibody testing. <br></br>
            Hours: <br></br>
          {site_info.sunday ? `Sunday: ${site_info.sunday}` : ''}{site_info.sunday ? <br></br> : ''}
            {site_info.monday ? `Monday: ${site_info.monday}` : ''}{site_info.monday ? <br></br> : ''}
            {site_info.tuesday ? `Tuesday: ${site_info.tuesday}` : ''}{site_info.tuesday ? <br></br> : ''}
            {site_info.wednesday ? `Wednesday: ${site_info.wednesday}` : ''}{site_info.wednesday ? <br></br> : ''}
            {site_info.thursday ? `Thursday: ${site_info.thursday}` : ''}{site_info.thursday ? <br></br> : ''}
            {site_info.friday ? `Friday: ${site_info.friday}` : ''}{site_info.friday ? <br></br> : ''}
            {site_info.saturday ? `Saturday: ${site_info.saturday}` : ''}{site_info.saturday ? <br></br> : ''}
            {site_info.additional_info ? `Additional Information: ${site_info.additional_info}` : ''}{site_info.additional_info ? <br></br> : ''}
            {site_info.provider_url ? `URL: ` : ''}{site_info.provider_url ? <a href = {site_info.provider_url}>{site_info.provider_url}</a> : ''}{testingSite.provider_url ? <br></br> : ''}
            <br></br><Link href="/covid-testing-sites/[site]" as={`/covid-testing-sites`}>
                <a>Link to this Info</a>
            </Link>
          </p>
        )
      })}
    </div>
  )
}

TestingSitePage.getLayout = getLayout;

export default TestingSitePage;
