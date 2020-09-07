import React from 'react';
import Link from 'next/link';
import { startCase } from 'lodash';

const HourDisplay = ({ day, dayHours }) => (
  <>
    {day}: {dayHours}<br />
  </>
);

export function TestingSiteInfo({ site }) {
  const {
    name,
    address,
    phone,
    appointment_required,
    antibody_testing,
    hours,
    additional_info,
    provider_url,
  } = ((site || {}).site_info || {});
  return (
    <p>
      {name ? `Name: ${name}` : ''}{name ? <br /> : ''}
      Address: {address} <br />
      {phone && (
        <>
          Phone Number: {phone}<br />
        </>
      )}
      You are {appointment_required ? 'required' : 'not required'} to have an appointment to get tested.<br />
      This testing site {antibody_testing ? 'provides' : 'does not provide'} antibody testing. <br />
      Hours: <br />
      {hours.sunday && <HourDisplay day="Sunday" dayHours={hours.sunday} />}
      {hours.monday && <HourDisplay day="Monday" dayHours={hours.monday} />}
      {hours.tuesday && <HourDisplay day="Tuesday" dayHours={hours.tuesday} />}
      {hours.wednesday && <HourDisplay day="Wednesday" dayHours={hours.wednesday} />}
      {hours.thursday && <HourDisplay day="Thursday" dayHours={hours.thursday} />}
      {hours.friday && <HourDisplay day="Friday" dayHours={hours.friday} />}
      {hours.saturday && <HourDisplay day="Saturday" dayHours={hours.saturday} />}
      {additional_info ? `Additional Information: ${additional_info}` : ''}{additional_info ? <br /> : ''}
      {provider_url && (
        <>
          URL: <a href={provider_url}>{provider_url}</a><br />
        </>
      )}
      <Link
        href={site.pageLink.href}
        as={site.pageLink.as}
      >
          <a>Link to this Info</a>
      </Link>
    </p>
  );
}
