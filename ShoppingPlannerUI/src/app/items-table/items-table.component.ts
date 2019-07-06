import { Component, OnInit } from '@angular/core';
import { itemList } from '../item-list';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {
  
  productList = itemList;

  constructor() { }

  ngOnInit() {
  }

  getTotal()
  {
    let _total = 0.0;
    
    this.productList.forEach((p)=>
    {
      _total += p.Price;
    });
    return _total;
  }

}
