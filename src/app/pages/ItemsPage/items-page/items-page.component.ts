import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../../../servicies/items.service';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../../interface/ProductInterface';



@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css'],
})
export class ItemsPageComponent implements OnInit {
  RESURSE_URL = 'http://localhost:8080/com_movie_apl_war/';
  constructor(private route: ActivatedRoute, private itemsService: ItemsService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.itemsService.category = this.route.snapshot.params.name;
    this.getItems(this.itemsService.category);
  }


  getItems(category: string): void{
    this.http.get<Product[]>(this.RESURSE_URL + 'category/' + this.itemsService.category)
      .subscribe(response => {
        this.itemsService.items = response;
      });
  }

}
