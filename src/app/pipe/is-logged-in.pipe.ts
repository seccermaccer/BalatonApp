import { Pipe, PipeTransform } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import { take } from 'rxjs/operators';

@Pipe({
  name: 'isLoggedIn'
})
export class IsLoggedInPipe implements PipeTransform {

  constructor(private authService: AuthService) {}

  transform(): boolean {
    let isLoggedIn = false;
    this.authService.isLoggedIn$.pipe(take(1)).subscribe(value => {
      isLoggedIn = value;
    });
    return isLoggedIn;
  }

}
