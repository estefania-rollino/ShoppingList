import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { itemList } from '../item-list';
import { saveAs } from 'file-saver/dist/FileSaver';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements AfterViewInit {

  _fileName: string = 'shopping-list';
  @ViewChild('uploadFileInput') fileinput: ElementRef; 

  constructor(private listItems: itemList)
  {
    
  }
 
  ngAfterViewInit(): void {
    console.log(this.fileinput.nativeElement);
  }

  exportList() {
    var fileContent = JSON.stringify(this.listItems);
    var blob = new Blob([fileContent], { type: "application/json" });
  
    let currentFilename =`${this._fileName}-${new Date().getDate()}-${ new Date().getMonth()}`; 
    saveAs(blob, currentFilename);

  }

  onChange(event: any) {
    console.log("upload...");
    var aux = event.target.files[0] as File;
    var filereader = new FileReader();
    var self = this;
    filereader.onload = () => {
      if (filereader.DONE) {
        var result = filereader.result as string;
        var _list = JSON.parse(result) as itemList;
        self.listItems.values = (0 < _list.values.length) ? _list.values: [];
        
      }
      
    }

    filereader.readAsBinaryString(aux);
  }

}
