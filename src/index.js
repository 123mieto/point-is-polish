import inside from 'point-in-polygon';
import * as boundaries from './boundaries-poland';

const polygon = boundaries.coordinates;

function isInPoland(lat, lng) {
  if (Number.isNaN(lat)) {
    throw new Error('Latitude is not a number');
  }
  if (Number.isNaN(lng)) {
    throw new Error('Longitude is not a number');
  }
  return inside([lat, lng], polygon);
}

export default isInPoland;
