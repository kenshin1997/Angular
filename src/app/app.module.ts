import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './MainPage/navbar/navbar.component';
import { MapComponent } from './MainPage/map/map.component';
import { MenuComponent } from './MainPage/menu/menu.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import {ItemMenuComponent} from './ItemPage/menu/menu.component';
import { CardsComponent } from './ItemsPage/cards/cards.component';
import { FilterComponent } from './ItemsPage/filter/filter.component';
import { BucketComponent } from './BagPage/bucket/bucket.component';
import { CorouselComponent } from './MainPage/corousel/corousel.component';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './MainPage/main-page/main-page.component';
import {BagPageComponent} from './BagPage/bag-page/bag-page.component';
import {ItemsPageComponent} from './ItemsPage/items-page/items-page.component';
import {ItemPageComponent} from './ItemPage/item-page/item-page.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'bag', component: BagPageComponent},
  {path: 'category/:name', component: ItemsPageComponent},
  {path: 'product/:id', component: MainPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    MenuComponent,
    ItemMenuComponent,
    FooterComponent,
    CardsComponent,
    FilterComponent,
    BucketComponent,
    BagPageComponent,
    MainPageComponent,
    ItemsPageComponent,
    ItemPageComponent,
    FooterComponent,
    CorouselComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
