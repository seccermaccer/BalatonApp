import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Spot} from "../shared/models/Spot";
import {ZamardiService} from "../shared/services/zamardi.service";

@Component({
  selector: 'app-zamardi',
  templateUrl: './zamardi.component.html',
  styleUrls: ['./zamardi.component.scss']
})
export class ZamardiComponent implements OnInit {

  spots$: Observable<Spot[]>;

  constructor(private zamardi: ZamardiService) {
    this.spots$ = this.zamardi.getAll();
  }

  ngOnInit(): void {
  }

}
