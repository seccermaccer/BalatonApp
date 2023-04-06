import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable, shareReplay} from "rxjs";
import {IsLoggedInPipe} from "./pipe/is-logged-in.pipe";
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  loggedInUser?: firebase.default.User | null;

  currentUser: boolean | undefined;

  constructor(private breakpointObserver: BreakpointObserver,private loggedInPipe: IsLoggedInPipe,private authS: AuthService,private router: Router) {
    this.authS.isLoggedIn$.subscribe(isLoggedIn => {
      this.currentUser = this.loggedInPipe.transform();
    });
  }

  ngOnInit(): void {
    this.authS.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user',JSON.stringify(this.loggedInUser));

    },error => {
      console.error(error);
      localStorage.setItem('user',JSON.stringify(null));
    });
  }


  hiddenMenu: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  logout(){
    this.authS.logout();
    console.log("Sikeres kijelentkezés");
    this.router.navigate(['bejelentkezes'])
  }
}
