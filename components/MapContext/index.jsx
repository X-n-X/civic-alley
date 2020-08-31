import React, { useReducer, createContext } from 'react';

export const MapContext = createContext();

export const MAP_ACTIONS = {
  SET_MARKERS: 'MAP_ACTIONS.SET_MARKERS',
  CLEAR_MARKERS: 'MAP_ACTIONS.CLEAR_MARKERS',
  SET_CENTER: 'MAP_ACTIONS.SET_CENTER',
  CLEAR_CENTER: 'MAP_ACTIONS.CLEAR_CENTER',
};

const initialMapState = {
  markers: [],
  activeMarker: null,
  center: null,
};

function mapStateReducer(state, action) {
  switch (action.type) {
    case MAP_ACTIONS.SET_MARKERS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case MAP_ACTIONS.CLEAR_MARKERS: {
      return {
        ...state,
        markers: [],
      };
    }
    case MAP_ACTIONS.SET_CENTER: {
      return {
        ...state,
        center: action.payload
          ? {
            lat: action.payload.lat,
            lng: action.payload.lng,
          }
          : null,
      };
    }
    case MAP_ACTIONS.CLEAR_CENTER: {
      return {
        ...state,
        center: null,
      };
    }
    default: {
      return state;
    }
  }
}

export function MapStateContextProvider({ children }) {
  const [mapState, dispatch] = useReducer(mapStateReducer, initialMapState);

  const mapContextState = React.useMemo(() => {
    //console.log("first market",markers[0])
    return {
      mapState,
      dispatch,
    };
  }, [mapState]);

  return (
    <MapContext.Provider value={mapContextState}>
      {children}
    </MapContext.Provider>
  );
}
