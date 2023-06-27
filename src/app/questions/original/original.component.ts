import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./original.component.scss']
})
export class OriginalComponent implements OnInit {
  original:string="1"
  @Output() newItemEvent = new EventEmitter<any>();

  @Input() checkList: any[]= [];
  constructor() {

  }

  ngOnInit(): void {
  }
  addNewItem(value: string) {

  }
  isAllSelected(item: any) {
    this.checkList.forEach(val => {
      if (val.id == item.id) val.isSelected = !val.isSelected;
      else {
        val.isSelected = false;
      }
    });
    this.newItemEvent.emit(item);
  }
}
