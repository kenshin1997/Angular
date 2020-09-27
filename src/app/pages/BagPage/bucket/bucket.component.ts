import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  quantity: number = 0;
  // @ts-ignore
  // tslint:disable-next-line:new-parens
  form: bucketForm = new class implements bucketForm {
    email: string;
    name: string;
    phone: number;
  };
  @ViewChild('formElement') inputForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  value(sing: string): void {
    switch (sing) {
      case 'minus': this.quantity--;
                    break;
      case 'plus': this.quantity++;
                   break;
    }
  }
  onSubmit(): void {
   this.form.name = this.inputForm.value.fname;
   this.form.phone = this.inputForm.value.phone;
   this.form.email = this.inputForm.value.email;
  }
}
