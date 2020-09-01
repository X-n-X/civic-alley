import React, { useContext, useEffect } from 'react';

import { getLayout } from 'components/MapLayout';
import { MapContext, MAP_ACTIONS } from 'components/MapContext';

function Index() {
  const { dispatch } = useContext(MapContext);

  useEffect(() => {
    dispatch({ type: MAP_ACTIONS.CLEAR_MARKERS });
  }, []);

  return (
    <div className="sidebar-content">
      Welcome to Townie
    </div>
  );
}

Index.getLayout = getLayout;

export default Index;
