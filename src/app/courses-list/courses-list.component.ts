import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ListType } from '../static-data';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {

  @Input() list: ListType;
  @Input() index: number;
  @Output() deleteItem = new EventEmitter();
  public date:Date;
  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }


  ngOnChanges(changes: SimpleChanges) {

    let date = changes.list.currentValue.creationDDate
    let dateDiff = this.getDateDiff(date);
  }

  getDateDiff(oldDate) {
    let diff = oldDate.getTime() - this.date.getTime();
    return diff / (1000 * 3600 * 24);
  }

  delete(id) {
    this.deleteItem.emit(id);
  }
}
