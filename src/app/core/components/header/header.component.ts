import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { AdminMenuElement, MenuElement, UserMenuElement } from '@models/header';
import firebase from 'firebase/compat/app';
import { map, switchMap, take, tap } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() activatedRoute: string = '';
  private isAdmin!: boolean;
  public menuElements: MenuElement[] = [];

  public isConnected!: firebase.User | null;

  constructor(private authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.authService
      .isUserAuthenticated()
      .pipe(
        tap(user => this.isConnected = user),
        switchMap(() => this.authService.isUserAdmin()),
        take(1),
        map((isAdmin) => {
          this.isAdmin = isAdmin;
        })
      )
      .subscribe({ error: () => { }, complete: () => this.createMenuElements() });
  }

  private createMenuElements() {
    if (!this.isConnected) {
      return;
    } else {
      if (this.isAdmin) {
        this.menuElements = AdminMenuElement;
      } else {
        this.menuElements = UserMenuElement;
      }
    }
  }

  public logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}
