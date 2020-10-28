import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../../servicies/item.service';
import {Product} from '../../../interface/ProductInterface';
import {BagService} from '../../../servicies/bag.service';
import {Photo} from '../../../interface/PhotoInterface';

@Component({
  selector: 'app-itemMenu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class ItemMenuComponent implements OnInit {
  quantity: number = 1;
  item: Product;
  @ViewChild('formElement') inputForm: NgForm;
  mainImage: string;
  images: Photo[];
  constructor(private itemService: ItemService, private bagService: BagService) { }
  ngOnInit(): void {
    this.item = this.itemService.item;
    this.mainImage = this.item.photos.find(photo => photo.main === true).url;
    this.images = this.item.photos;
  }
  changeMainImage(event): void {
    this.mainImage = event.currentTarget.src;
  }
  changeImageCaurusel(index): void {
    this.mainImage = this.images[index].url;
  }
  value(sing: string): void {
    this.quantity = this.inputForm.value.quantity;
    if (this.quantity === 1 && sing === 'minus') {
      return ;
    }
    switch (sing) {
      case 'minus': this.quantity--;
                    break;
      case 'plus': this.quantity++;
                   break;
    }
  }
  onSubmit(): void{
    if (this.bagService.items.some(item => item.id === this.item.id)) {
      console.log(true);
      this.bagService.items.find(item => item.id === this.item.id).description.orders += this.inputForm.value.quantity;
    }else {
      this.item.description.orders = this.inputForm.value.quantity;
      console.log(this.item);
      this.bagService.items.push(this.item);
    }
  }
}
