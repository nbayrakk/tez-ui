import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  like: string = "1"
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() checkList: any[]= [];

  constructor() {

  }

  ngOnInit(): void {
  }
  addNewItem(value: string) {

  }
  isAllSelected(item: any) {
    console.log(item);

    this.checkList.forEach(val => {
      if (val.id == item.id) val.isSelected = !val.isSelected;
      else {
        val.isSelected = false;
      }
    });
    this.newItemEvent.emit(item);
  }
}
