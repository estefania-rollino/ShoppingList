import { Item } from './item';
import { Injectable } from "@angular/core";


@Injectable()
export class itemList 
{
    values = [];
    constructor()
    {
        this.values = [];
    }
}