import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '@app/user/services/user.service';
import { User } from '@models/user';

@Component({
  selector: 'app-infos-perso',
  templateUrl: './infos-perso.component.html',
  styleUrls: ['./infos-perso.component.scss'],
})
export class InfosPersoComponent implements OnInit {
  public userInformations!: User;
  public loginForm = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private userService: UserService
  ) {
    this.userService.getUserInfos()
      .subscribe(
        user => {
          this.userInformations = user;
          console.log(this.userInformations)
        }
      )
  }

  ngOnInit(): void {
  }

}
