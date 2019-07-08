import { Injectable } from '@angular/core';

@Injectable()
export class Item {
    ProductName : string
    Price : number
    Description : string
    Checked: Boolean;

    

    constructor(pn, price, description)
    {
        this.ProductName = pn;
        this.Price = price;
        this.Description = description;
        this.Checked = false;
    }
        
}
