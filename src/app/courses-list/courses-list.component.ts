import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ListType } from '../static-data';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {

  @Input() list: ListType;
  @Input() index:number;
  @Output() deleteItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log("Called ngOnInit")
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log("called ngOnChanges")
   
  }
  delete(id){
    console.log("delete record");
    this.deleteItem.emit(id);
    }
}
