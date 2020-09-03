import React, { useReducer, createContext } from 'react';

export const MapContext = createContext();

export const MAP_ACTIONS = {
  SET_MARKERS: 'MAP_ACTIONS.SET_MARKERS',
  CLEAR_MARKERS: 'MAP_ACTIONS.CLEAR_MARKERS',
  SET_CENTER: 'MAP_ACTIONS.SET_CENTER',
  CLEAR_CENTER: 'MAP_ACTIONS.CLEAR_CENTER',
  SET_ACTIVE_MARKER: 'MAP_ACTIONS.SET_ACTIVE_MARKER',
  CLEAR_ACTIVE_MARKER: 'MAP_ACTIONS.CLEAR_ACTIVE_MARKER',
  SET_ZOOM: 'MAP_ACTIONS.SET_ZOOM',
};

const initialMapState = {
  markers: [],
  activeMarker: null,
  center: null,
  zoom: null,
};

export const createSetCenterAction = (centerCoords) => ({
  type: MAP_ACTIONS.SET_CENTER,
  payload: centerCoords,
});

function mapStateReducer(state, action) {
  switch (action.type) {
    case MAP_ACTIONS.SET_MARKERS: {
      return {
        ...state,
        markers: action.payload,
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
    case MAP_ACTIONS.SET_ACTIVE_MARKER: {
      return {
        ...state,
        activeMarker: {
          lat: action.payload.lat,
          lng: action.payload.lng,
        },
        zoom: 14,
        center: {
          lat: action.payload.lat,
          lng: action.payload.lng,
        },
      };
    }
    case MAP_ACTIONS.CLEAR_ACTIVE_MARKER: {
      return {
        ...state,
        activeMarker: null,
        zoom: null,
        center: null,
      };
    }
    case MAP_ACTIONS.SET_ZOOM: {
      return {
        ...state,
        zoom: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export function MapStateContextProvider({ children }) {
  const [mapState, dispatch] = useReducer(mapStateReducer, initialMapState);

  if (typeof window === 'object') {
    window.mapStateDispatch = window.mapStateDispatch || dispatch
  }

  const mapContextState = React.useMemo(() => {
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
