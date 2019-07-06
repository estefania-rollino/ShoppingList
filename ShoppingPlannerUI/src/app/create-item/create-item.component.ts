import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { itemList } from '../item-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  
  //Item = new Item('', 0.0, '');
  ProductName = "";
  Price = 0.0;

  constructor(
    private _list : itemList,
    private _router : Router
    ) 
  { }

  ngOnInit() {
  }

  submit()
  {
    let currentItem = new Item(this.ProductName, this.Price, "");
    this._list.values.push(currentItem);
    //console.log(JSON.stringify(this._list));
    this._router.navigate(['home']);

  }

  
}
