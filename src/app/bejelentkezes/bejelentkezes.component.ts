import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {IsLoggedInPipe} from "../pipe/is-logged-in.pipe";

@Component({
  selector: 'app-bejelentkezes',
  templateUrl: './bejelentkezes.component.html',
  styleUrls: ['./bejelentkezes.component.scss']
})
export class BejelentkezesComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authServices: AuthService,private router: Router,private pipe: IsLoggedInPipe) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;
      this.authServices.login(email,password).then(() => {
        console.log("Sikeres belépés!");
        window.alert("Sikeres bejelentkezés!")
        this.router.navigate(['osszes'])

      }).catch(error => {
        console.error(error);
        window.alert(error);
      })
    }
  }

}
