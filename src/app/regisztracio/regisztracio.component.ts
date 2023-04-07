import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../shared/models/User";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-regisztracio',
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.scss']
})
export class RegisztracioComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authS: AuthService,private router: Router,private userS: UserService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]

    },{ validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const { email, password } = this.registerForm.value;
      this.authS.signUp(email,password).then(cred => {
        console.log("Sikeres regisztráció");
        window.alert("Sikeres regisztráció!");
        this.router.navigate(['osszes']);

        const user: User = {
          id: cred.user?.uid as string,
          email: this.registerForm.get('email')?.value,
          username: this.registerForm.get('email')?.value.split('@')[0],
          name: {
            firstname: this.registerForm.get('firstname')?.value,
            lastname: this.registerForm.get('lastname')?.value
          }
        };

        this.userS.create(user).then(_ => {
          console.log("Sikeres adatfelvitel!");
        }).catch(error => {
          console.error(error)
        })

      }).catch(error => {
        console.error(error);
        window.alert(error);
      })
    }
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      return null;
    }
  }

}
