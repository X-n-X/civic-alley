import React from 'react';
import Link from 'next/link';

export function CommunityOrgInfo ({ orgSite }) {
  const { site_info } = orgSite;
  return (
    <p>
      {orgSite.name ? `Name: ${orgSite.name}` : ''}{orgSite.name ? <br /> : ''}
      Address: {site_info.address} <br />
      {site_info.type ? `Type: ${site_info.type}` : ''}{site_info.type ? <br /> : ''}
      {site_info.purpose ? `Purpose: ${site_info.purpose}` : ''}{site_info.purpose ? <br /> : ''}
      {site_info.neighborhoodAssociatedWith ? `Neighborhood(s) Associated With: ${site_info.neighborhoodAssociatedWith}` : ''}{site_info.neighborhoodAssociatedWith ? <br /> : ''}
      {site_info.website ? `URL: `: ''}{site_info.website ? <a href={site_info.website}>{site_info.website}</a> : ''}{site_info.website ? <br /> : ''}
      {site_info.contactInfo ? `Contact Info: `: ''}{site_info.contactInfo&&site_info.contactInfo.includes("@") ? <a href = {`mailto:${site_info.contactInfo}`}>{site_info.contactInfo}</a> : ''}
      {site_info.contactInfo && !site_info.contactInfo.includes("@") ? <a href={site_info.contactInfo}>{site_info.contactInfo}</a> : ''}{site_info.contactInfo ? <br /> : ''}
      <Link href="/community-orgs/[latLng]" as={`/community-orgs/${orgSite.coordinates.lat},${orgSite.coordinates.lng}`}>
        <a>Link to this Info</a>
      </Link>
    </p>
  );
}
