import { Component, OnInit, OnChanges } from '@angular/core';
import { itemList } from '../item-list';
import { Item } from '../item';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit, OnChanges {
  
  private _checkedIndex: Array<number> = [];
  public itemsList : itemList ;
  constructor(
    elems: itemList
    ) 
  { 
    this.itemsList = elems; 
  }

  ngOnChanges()
  {
    console.log("ngOnChanges...");

  }

  ngOnInit() 
  {
    console.log("ngOnInit...");
  }

  getTotal()
  {
    let _total = 0.0;
    
    this.itemsList.values.forEach((p)=>
    {
      _total += p.Price;
    });
    return _total.toPrecision(3);
  }

  sumSelectedItems()
  {
    let _sum = 0.0;
        
    this.itemsList.values.forEach((p: Item) =>
    {
      if(p.Checked){
        _sum += p.Price;
      }
    })
    return _sum.toPrecision(3);

  }

  deleteItem(p)
  {
    this.itemsList.values
    console.log(JSON.stringify(p));
  }

  logger()
  {
    console.log(JSON.stringify(this.itemsList.values));
  }
}
