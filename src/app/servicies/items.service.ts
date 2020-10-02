import {Injectable} from '@angular/core';
import {Product} from '../interface/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Product[] = [];
  category: string;
  constructor() { }
}
