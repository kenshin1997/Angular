import { Injectable } from '@angular/core';
import {Product} from '../interface/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  items: Product[] = [];
  constructor() { }
}
