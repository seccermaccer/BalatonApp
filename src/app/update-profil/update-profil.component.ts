import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/User";


@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.scss']
})
export class UpdateProfilComponent implements OnInit {

  user?: User;
  updateForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private userS: UserService) {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;

    this.userS.getById(user.uid).subscribe((data) => {
      this.user = data;
      if (this.user) {
        this.updateForm.patchValue({
          username: this.user?.username,
          name: {
            firstname: this.user?.name?.firstname,
            lastname: this.user?.name?.lastname,
          },
        });
      }
    });

    this.updateForm = this.formBuilder.group({
      username: ['', Validators.required],
      name:  this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userS.getById(user.uid).subscribe(data => {
      this.user = data;
    },error => {
      console.error(error);
    })

    this.updateForm.valueChanges.subscribe(val => {
      if (this.user) {
        this.user.username = val.username;
        this.user.name.firstname = val.name.firstname;
        this.user.name.lastname = val.name.lastname;
      }
    });
  }

  onSubmit(){
    if(this.updateForm.valid){
      this.userS.update(<User>this.user).then(cred => {
        console.log(cred);
        window.alert("Sikeres adat megváltoztatás!");
        this.router.navigate(['profil'])
      }).catch(error => {
        console.error(error);
        window.alert(error);
      })
    }
  }

}
