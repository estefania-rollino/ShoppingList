import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ItemsTableComponent } from './items-table/items-table.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { itemList } from './item-list';
import { Item } from './item';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ItemsTableComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    itemList,
    // Item
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
