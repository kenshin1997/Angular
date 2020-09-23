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
import { PageComponent } from './MainPage/page/page.component';
import { CorouselComponent } from './MainPage/corousel/corousel.component';
import {ItemsPageComponent} from './ItemsPage/page/page.component';
import {ItemPageComponent} from './ItemPage/page/page.component';
import {BagPageComponent} from './BagPage/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    MenuComponent,
    ItemMenuComponent,
    ItemsPageComponent,
    ItemPageComponent,
    FooterComponent,
    CardsComponent,
    FilterComponent,
    BagPageComponent,
    BucketComponent,
    PageComponent,
    CorouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
