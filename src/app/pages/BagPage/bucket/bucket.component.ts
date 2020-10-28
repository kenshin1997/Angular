import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BucketFormInterface} from '../../../interface/BucketFormInterface';
import {BagService} from '../../../servicies/bag.service';
import {Product} from '../../../interface/ProductInterface';
import {of} from 'rxjs';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  RESURSE_URL = 'http://localhost:8080/com_movie_apl_war/';
  quantity: number = 0;
  totalPrice: number = 0;
  form: BucketFormInterface = {} as BucketFormInterface;
  @ViewChild('formElement') inputForm: NgForm;
  constructor(public bagService: BagService, private http: HttpClient, private location: Location,  private router: Router) { }

  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  deleteItem(id: number): void{
    this.bagService.items = this.bagService.items.filter(item => item.id !== id);
  }

  value(sing: string, id: number): void {
   switch (sing) {
     case 'minus': this.bagService.items.find(item => item.id === id).description.orders--;
                   break;
      case 'plus': this.bagService.items.find(item => item.id === id).description.orders++;
                   break;
    }
   this.calculateTotalPrice();
  }
  changeTotalPrice(event, id: number): void {
     this.bagService.items.find(item => item.id === id).description.orders = event.target.value;
     this.calculateTotalPrice();
  }

  onSubmit(): void {
   this.form.name = this.inputForm.value.fname;
   this.form.phone = this.inputForm.value.phone;
   this.form.email = this.inputForm.value.email;
   this.sendPost(this.form, this.bagService.items);
  }

  calculateTotalPrice(): void{
    this.totalPrice = 0;
    for ( const item of this.bagService.items) {
      this.totalPrice += item.description.orders * item.description.price;
   }
  }

  sendPost(form: BucketFormInterface, items: Product[]): void{
    form.products = items;
    console.log(form);
    this.http.post(this.RESURSE_URL + 'bag/form' , form)
      .subscribe(response => {
        console.log(response);
        this.bagService.items = [];
        this.location.replaceState('/');
        this.router.navigate(['confirmation']);
      });

  }

}
