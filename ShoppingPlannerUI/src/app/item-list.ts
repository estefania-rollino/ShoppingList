import { Injectable } from "@angular/core";
import { Item } from './item';

@Injectable()
export class itemList 
{
    values: Array<Item> = [];
    constructor()
    {
        this.values = [];
    }


}