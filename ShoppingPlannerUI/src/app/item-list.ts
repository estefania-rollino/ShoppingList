import { Injectable } from "@angular/core";
import { Item } from './item';

@Injectable()
export class itemList 
{
    test: string = "";
    values: Array<Item> = [];
    constructor()
    {
        this.values = [];
    }


}