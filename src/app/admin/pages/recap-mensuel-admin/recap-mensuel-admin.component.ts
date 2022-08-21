import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecapMensuelService } from '@app/admin/services/recap-mensuel-service';
import { User } from '@models/user';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-recap-mensuel-admin',
  templateUrl: './recap-mensuel-admin.component.html',
  styleUrls: ['./recap-mensuel-admin.component.scss'],
})
export class RecapMensuelAdminComponent implements OnInit {
  public allUsers: User[] = [];
  public loading = false;

  constructor(
    private recapMensuelService: RecapMensuelService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.recapMensuelService.getAllUsers().pipe(take(1)).subscribe((res) => {
      this.allUsers = res;
      this.loading = false;
    })
  }

  public goToRecapMensuelUtilisateur(userId: string) {
    this.router.navigate([`/admin/recap-utilisateur-mensuel/${userId}`]);
  }
}
