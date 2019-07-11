import { Component, OnInit } from '@angular/core';
import { itemList } from '../item-list';
import { saveAs } from 'file-saver/dist/FileSaver';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  //private listItems: itemList = undefined;
  constructor(
    private listItems: itemList
  ) {
    //this.listItems = listOfItems;
  }

  ngOnInit() {
  }

  exportList() {
    var fileContent = JSON.stringify(this.listItems);
    var blob = new Blob([fileContent], { type: "application/json" });
    saveAs(blob, "test");

  }

  onChange(event: any) {
    console.log("upload...");
    var aux = event.target.files[0] as File;
    var filereader = new FileReader();
    var self = this;
    filereader.onload =  () => {
      // console.log(filereader.DONE);
      // console.log(filereader.result);
      var result = filereader.result as string;
      var objs = JSON.parse(result) as itemList;
      self.listItems.test = "change value";
      self.listItems.values = objs.values;
      //return objs;
    }
    
    filereader.readAsBinaryString(aux);
    //console.log( JSON.stringify(fileContent));
  }

  toInstance<T>(obj: T, json: string): T {
    var jsonObj = JSON.parse(json);

    if (typeof obj["fromJSON"] === "function") {
      obj["fromJSON"](jsonObj);
    }
    else {
      for (var propName in jsonObj) {
        obj[propName] = jsonObj[propName]
      }
    }

    return obj;
  }

}
