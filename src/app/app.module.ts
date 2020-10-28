import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Location} from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/MainPage/navbar/navbar.component';
import { MapComponent } from './pages/MainPage/map/map.component';
import { MenuComponent } from './pages/MainPage/menu/menu.component';
import { FooterComponent } from './pages/MainPage/footer/footer.component';
import {ItemMenuComponent} from './pages/ItemPage/menu/menu.component';
import { CardsComponent } from './pages/ItemsPage/cards/cards.component';
import { FilterComponent } from './pages/ItemsPage/filter/filter.component';
import { BucketComponent } from './pages/BagPage/bucket/bucket.component';
import { CorouselComponent } from './pages/MainPage/corousel/corousel.component';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './pages/MainPage/main-page/main-page.component';
import {BagPageComponent} from './pages/BagPage/bag-page/bag-page.component';
import {ItemsPageComponent} from './pages/ItemsPage/items-page/items-page.component';
import {ItemPageComponent} from './pages/ItemPage/item-page/item-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ItemService} from './servicies/item.service';
import {ItemsService} from './servicies/items.service';
import {PhotoPipe} from './pipes/PhotoPipe';
import { ConfirmationComponent } from './pages/BagPage/confirmation/confirmation.component';
import {AboutUsComponent} from './pages/Aditional/about-us/about-us.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'test', component: ItemPageComponent},
  {path: 'bag', component: BagPageComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'category/:name', component: ItemsPageComponent},
  {path: 'product/:id', component: ItemPageComponent},
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
    CorouselComponent,
    PhotoPipe,
    ConfirmationComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ItemService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
