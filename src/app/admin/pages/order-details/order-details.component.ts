import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  constructor(private router: Router) {
    // gerer le fait qu'on refresh & donc qu'il n'y ai pas la data dans le state
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }
}
