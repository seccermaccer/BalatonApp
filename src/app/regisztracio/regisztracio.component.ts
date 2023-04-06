import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-regisztracio',
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.scss']
})
export class RegisztracioComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authS: AuthService,private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    },{ validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const { email, password } = this.registerForm.value;
      this.authS.signUp(email,password).then(() => {
        console.log("Sikeres regisztráció");
        window.alert("Sikeres regisztráció!");
        this.router.navigate(['osszes']);




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
