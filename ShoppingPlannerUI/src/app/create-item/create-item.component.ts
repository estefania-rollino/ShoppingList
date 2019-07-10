import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { itemList } from '../item-list';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent  {
  
  Item = new Item('', 0.0, '');

  constructor(
    private _list : itemList,
    private _router : Router,
    ) 
  { 

    
  }

  submit()
  {
    
    this._list.values.push(this.Item);
    
    this._router.navigate(['home']);

  }

  
}
