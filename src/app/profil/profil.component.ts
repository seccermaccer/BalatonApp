import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/User";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user?: User;

  constructor(private userS: UserService,private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userS.getById(user.uid).subscribe(data => {
      this.user = data;
    },error => {
      console.error(error);
    })
  }

  delete(userId: string){
    if(confirm("Ez egy végleges folyamat,biztosan kiszeretnéd törölni a fiókodat?")){
      this.userS.delete(userId);
      window.alert("Sikeres fiók törlés!")
      this.auth.logout();
      this.router.navigate(['osszes'])
    }
  }

}
