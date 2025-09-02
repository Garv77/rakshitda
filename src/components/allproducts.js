import { products as essentialsProducts } from './Essentials';
import { products as stationeryProducts } from './DailyUse';
import { products as hostelProducts } from './Clothing';

export const allProducts = [
  ...essentialsProducts,
  ...stationeryProducts,
  ...hostelProducts,
];