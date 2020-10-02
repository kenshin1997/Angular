import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../../../servicies/item.service';
import {ItemsService} from '../../../servicies/items.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],
})
export class ItemPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private itemService: ItemService, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemService.itemId = this.route.snapshot.params.id;
    this.itemService.getItem(this.route.snapshot.params.id);
  }

}
