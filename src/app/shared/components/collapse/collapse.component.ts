import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse [collapseId] [collapseTitle]',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit, OnDestroy {
  @Input() collapseId: string = "";
  @Input() collapseTitle: string = "";
  public isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.collapseId.length === 0) {
      throw new TypeError("'collapseId' is a required input");
    }
    if (this.collapseTitle.length === 0) {
      throw new TypeError("'collapseTitle' is a required input");
    }
  }

  ngOnDestroy(): void {
  }

  rotateArrow() {
    this.isOpen = !this.isOpen;
  }

}
