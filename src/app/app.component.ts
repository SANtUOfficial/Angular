import { Component, OnInit } from '@angular/core';
import { ListType, listdata } from './static-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Angular-task';
  lists: any
  searchValue: any;

  ngOnInit() {
    this.lists = listdata;
  }

  fetchResults() {
    console.log(this.searchValue);
  }
  
  deleteItem(id) {

    let obj =this.lists.find(ele=>{
      return ele.id ==id;
    })
    this.lists.splice(obj, 1);
  }
}
