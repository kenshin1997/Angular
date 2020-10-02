import { Injectable } from '@angular/core';
import {ItemsService} from './items.service';
import {Product} from '../interface/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemId: number;
  item: Product;
  constructor(private itemsService: ItemsService) { }
  getItem(id: number): void{
    this.item =  this.itemsService.items.find(obj => obj.id == id);
    console.log(this.item);
  }
}
