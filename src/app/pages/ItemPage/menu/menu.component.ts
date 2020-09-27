import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-itemMenu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class ItemMenuComponent implements OnInit {
  quantity: number = 1;
  @ViewChild('formElement') inputForm: NgForm;
  mainImage = 'https://images.sportsdirect.com/images/products/45127203_l.jpg';
  images: string[] = ['https://static.zerochan.net/Himura.Kenshin.full.2477478.jpg', 'https://thebestjapan.com/wp-content/uploads/2020/01/rurouni-kenshin-ten-thumb.jpg',
    'https://i.pinimg.com/736x/b0/7e/d8/b07ed883e5ce56ca61ea960e02a760be.jpg', 'https://usercontent2.hubstatic.com/12377099_f1024.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuOH7Bajpw0iOLVigNk7koDKmOtj8IUQyDkw&usqp=CAU' ];
  constructor() { }
  ngOnInit(): void {
  }

  changeMainImage(event): void {
    this.mainImage = event.currentTarget.src;
  }
  changeImageCaurusel(index): void {
    this.mainImage = this.images[index];
  }
  value(sing: string): void {
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
  }
}
