import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {VelemenyService} from "../shared/services/velemeny.service";
import {Opinion} from "../shared/models/Opinion";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/User";

@Component({
  selector: 'app-velemenyezes',
  templateUrl: './velemenyezes.component.html',
  styleUrls: ['./velemenyezes.component.scss']
})
export class VelemenyezesComponent implements OnInit {

  commentForm: FormGroup;

  user?: User;

  constructor(private formBuilder: FormBuilder,private router: Router,private commentS: VelemenyService,private userS: UserService) {
    this.commentForm = this.formBuilder.group({
      username: ['', Validators.required],
      spotname: ['', Validators.required],
      comment: ['', Validators.required],


    });
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userS.getById(user.uid).subscribe(data => {
      this.user = data;
    },error => {
      console.error(error);
    })
  }

  onSubmit(){
    if(this.commentForm.valid){
      const comment: Opinion = {
        username: this.commentForm.get('username')?.value,
        spotname: this.commentForm.get('spotname')?.value,
        id: '',
        comment: this.commentForm.get('comment')?.value
      }

      this.commentS.create(comment).then(_ => {
        console.log("Sikeres véleményezés!");
        window.alert("Sikeres véleményezés!");
        this.router.navigate(['osszes']);
      }).catch(error => {
        console.error(error);
        window.alert(error);
      })

    }
  }

}
