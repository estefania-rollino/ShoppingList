import { Component, OnInit } from '@angular/core';
import { itemList } from '../item-list';
import { Item } from '../item';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {
  
  private _checkedIndex: Array<number> = [];
  constructor(
    private _list: itemList
    ) 
  { 
  }

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

  sumSelectedItems()
  {
    let _sum = 0.0;
        
    this._list.values.forEach((p: Item) =>
    {
      if(p.Checked){
        _sum += p.Price;
      }
    })
    return _sum;

  }

  logger()
  {
    console.log(JSON.stringify(this._list.values));
  }
}
