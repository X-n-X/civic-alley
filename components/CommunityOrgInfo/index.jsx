import React from 'react';
import Link from 'next/link';

export function CommunityOrgInfo ({ orgSite }) {
  const { siteInfo } = orgSite;
  return (
    <p>
      {orgSite.name ? `Name: ${orgSite.name}` : ''}{orgSite.name ? <br /> : ''}
      Address: {siteInfo.address} <br />
      {siteInfo.type ? `Type: ${siteInfo.type}` : ''}{siteInfo.type ? <br /> : ''}
      {siteInfo.purpose ? `Purpose: ${siteInfo.purpose}` : ''}{siteInfo.purpose ? <br /> : ''}
      {siteInfo.neighborhoodAssociatedWith ? `Neighborhood(s) Associated With: ${siteInfo.neighborhoodAssociatedWith}` : ''}{siteInfo.neighborhoodAssociatedWith ? <br /> : ''}
      {siteInfo.website ? `URL: `: ''}{siteInfo.website ? <a href={siteInfo.website}>{siteInfo.website}</a> : ''}{siteInfo.website ? <br /> : ''}
      {siteInfo.contactInfo ? `Contact Info: `: ''}{siteInfo.contactInfo&&siteInfo.contactInfo.includes("@") ? <a href = {`mailto:${siteInfo.contactInfo}`}>{siteInfo.contactInfo}</a> : ''}
      {siteInfo.contactInfo && !siteInfo.contactInfo.includes("@") ? <a href={siteInfo.contactInfo}>{siteInfo.contactInfo}</a> : ''}{siteInfo.contactInfo ? <br /> : ''}
      <Link href="/community-orgs/[latLng]" as={`/community-orgs/${orgSite.coordinates.lat},${orgSite.coordinates.lng}`}>
        <a>Link to this Info</a>
      </Link>
    </p>
  );
}
