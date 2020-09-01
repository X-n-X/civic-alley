import React, { useEffect } from 'react';
import useSwr from 'swr';

import { useRouter } from 'next/router'
import Link from 'next/link'

import { MapContext, MAP_ACTIONS } from 'components/MapContext';

import { getLayout } from 'components/MapLayout';

const fetcher = (...args) => fetch(...args).then(res => res.json());

//this is the data for the side of the map. however, it should only show up on click.
//will have to figure out how to do context to pass onClick so that it will show up
const TestingSites = ({ data }) => (
  <div>
    {
      data/*.filter(item=>item.site_name==="AdvantageCare Kings Highway") // filtering the data here. but we want it to filter to just the item that's clicked.*/
        .map((site) => (
          <p key={`${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`}>

            Address: {site.address} <br></br>
          {site.phone ? `Phone Number: ${site.phone}` : ''}{site.phone ? <br></br> : ''}
            You are {site.appointment_required ? 'required' : 'not required'} to have an appointment to get tested.<br></br>
          This testing site {site.antibody_testing ? 'provides' : 'does not provide'} antibody testing. <br></br>
            Hours: <br></br>
          {site.sunday ? `Sunday: ${site.sunday}` : ''}{site.sunday ? <br></br> : ''}
            {site.monday ? `Monday: ${site.monday}` : ''}{site.monday ? <br></br> : ''}
            {site.tuesday ? `Tuesday: ${site.tuesday}` : ''}{site.tuesday ? <br></br> : ''}
            {site.wednesday ? `Wednesday: ${site.wednesday}` : ''}{site.wednesday ? <br></br> : ''}
            {site.thursday ? `Thursday: ${site.thursday}` : ''}{site.thursday ? <br></br> : ''}
            {site.friday ? `Friday: ${site.friday}` : ''}{site.friday ? <br></br> : ''}
            {site.saturday ? `Saturday: ${site.saturday}` : ''}{site.saturday ? <br></br> : ''}
            {site.additional_info ? `Additional Information: ${site.additional_info}` : ''}{site.additional_info ? <br></br> : ''}
            {site.provider_url ? `URL: ` : ''}{site.provider_url ? <a href = {site.provider_url}>{site.provider_url}</a> : ''}{site.provider_url ? <br></br> : ''}
            <Link href="/covid-testing-sites/[testingSite]" as={`/covid-testing-sites/${site.coordinates.lat},${site.coordinates.lng}`}>
                <a>Link to this Info</a>
            </Link>
          </p>
        ))
    }
  </div>
);

function CovidTestingSitesPage() {
  const { dispatch: dispatchMapState } = React.useContext(MapContext);
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
    dispatchMapState({ type: MAP_ACTIONS.SET_MARKERS, payload: formattedData });

    return () => {
      dispatchMapState({ type: MAP_ACTIONS.CLEAR_MARKERS });
    }
  }, [data, dispatchMapState]);

  return (
    <div className="sidebar-content">
      {error && 'Error loading content'}
      {!data && !error && 'Loading...'}
      {/* {!error && data && "data here"} */}
      {!error && data && <TestingSites data = {data}/>}
    </div>
  );

}

CovidTestingSitesPage.getLayout = getLayout;

export default CovidTestingSitesPage;
