import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  public loginErrorMessage = '';
  public loginForm = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  public login(): void {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .pipe(take(1))
        .subscribe(
          () => this.router.navigate(['admin']),
          (err) => {
            this.loginErrorMessage = err.message;
          }
        );
    }
  }
}
