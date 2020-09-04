import { GoogleMap } from 'components/GoogleMap';
import { NavTabs } from 'components/NavTabs';

export function MapLayout({ children }) {
  return (
    <div className="map-layout-container">
      <div className="map-layout__nav-tabs">
        <NavTabs />
      </div>
      <aside className="map-layout__sidebar">
        {children}
      </aside>
      <div className="map-layout__map-content">
        <GoogleMap />
      </div>
    </div>
  );
}

export const getLayout = (pageComponent) => (
  <MapLayout>
    {pageComponent}
  </MapLayout>
);
