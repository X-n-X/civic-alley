import { MapStateContextProvider } from 'components/MapContext';
import { SelectedSiteContextProvider } from 'components/SelectedSiteContext';
import { GoogleMap } from 'components/GoogleMap';
import { NavTabs } from 'components/NavTabs';

export function MapLayout({ children }) {
  return (
    <MapStateContextProvider>
      <SelectedSiteContextProvider>
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
      </SelectedSiteContextProvider>
    </MapStateContextProvider>
  );
}

export const getLayout = (pageComponent) => (
  <MapLayout>
    {pageComponent}
  </MapLayout>
);
