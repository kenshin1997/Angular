import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../../../servicies/items.service';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css'],
  providers: [ItemsService]
})
export class ItemsPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.category = this.route.snapshot.params['name'];
  }


}
