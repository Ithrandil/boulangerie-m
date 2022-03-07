import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {
  faPhone = faPhone;
  faFacebook = faFacebook;
  constructor(
    public router: Router,
  ) { }
}
