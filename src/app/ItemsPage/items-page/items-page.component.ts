import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
  category: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.params['name'];
    console.log(this.category);
  }


}
