import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecapMensuelService } from '@app/admin/services/recap-mensuel-service';
import { User } from '@models/user';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-recap-mensuel-admin',
  templateUrl: './recap-mensuel-admin.component.html',
  styleUrls: ['./recap-mensuel-admin.component.scss'],
})
export class RecapMensuelAdminComponent implements OnInit, OnDestroy {
  public allUsers: User[] = [];
  public loading = false;

  constructor(
    private recapMensuelService: RecapMensuelService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    // this.recapMensuelService.getAllUsers().pipe(take(1)).subscribe((res) => {
    //   console.log("ALL USERS =>", res)
    // })

    this.recapMensuelService.getOneUser().pipe(take(1)).subscribe((res) => {
      console.log("ONE USER =>", res);
      this.allUsers = [res, {
        ...res,
        name: "Client test autre"
      }, {
          ...res,
          name: "Gerard Restaurant"
        }, {
          ...res,
          name: "Marguerite Lepine"
        },];
      console.log("ALL USERS =>", this.allUsers);
      this.loading = false;
    })
  }

  public goToRecapMensuelUtilisateur(userId: string) {
    this.router.navigate([`/admin/recap-mensuel/${userId}`]);
  }

  ngOnDestroy(): void {
    // TODO: garder ou pas?
    // this.unsubscribe$.next();
    // this.unsubscribe$.unsubscribe();
  }
}
