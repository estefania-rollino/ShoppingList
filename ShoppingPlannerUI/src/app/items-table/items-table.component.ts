import { Component, OnInit } from '@angular/core';
import { itemList } from '../item-list';
import { Item } from '../item';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {
  
  //productList = itemList;

  constructor(
    private _list: itemList
    ) 
  { }

  ngOnInit() {
  }

  getTotal()
  {
    let _total = 0.0;
    
    this._list.values.forEach((p)=>
    {
      _total += p.Price;
    });
    return _total;
  }

  logger()
  {
    console.log(JSON.stringify(this._list.values));
  }
}
