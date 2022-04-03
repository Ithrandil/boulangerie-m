import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss'],
})
export class TemplateModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, bodyText: string }) { }

  ngOnInit(): void { }
}
