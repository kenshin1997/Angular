import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../../servicies/items.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor(private itemsService: ItemsService) { }
  ngOnInit(): void {
  }

}
