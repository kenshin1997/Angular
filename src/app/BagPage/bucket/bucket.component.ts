import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  quantity: number = 0;
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

}
