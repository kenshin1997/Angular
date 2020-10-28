import {Product} from './ProductInterface';

export interface BucketFormInterface {
  name: string;
  phone: number;
  email: string;
  products: Product[];
}
