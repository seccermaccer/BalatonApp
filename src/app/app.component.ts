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

  currentUser: boolean | undefined;

  constructor(private breakpointObserver: BreakpointObserver,private loggedInPipe: IsLoggedInPipe,private authS: AuthService,private router: Router) {
    this.authS.isLoggedIn$.subscribe(isLoggedIn => {
      this.currentUser = this.loggedInPipe.transform();
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void{

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
