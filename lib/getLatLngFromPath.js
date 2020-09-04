const latLongRegex = /^([-\d.]+),([-\d.]+)$/;

export const getLatLngFromPath = (path) => {
  const match = latLongRegex.exec(path) || []
  return {
    lat: parseFloat(match[1]),
    lng: parseFloat(match[2]),
  }
};
