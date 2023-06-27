import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trustly',
  templateUrl: './trustly.component.html',
  styleUrls: ['./trustly.component.scss']
})
export class TrustlyComponent implements OnInit {

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
