import { Component, OnInit } from '@angular/core';
import {BalatonfuredService} from "../shared/services/balatonfured.service";
import {Observable} from "rxjs";
import {Spot} from "../shared/models/Spot";

@Component({
  selector: 'app-balatonfured',
  templateUrl: './balatonfured.component.html',
  styleUrls: ['./balatonfured.component.scss']
})
export class BalatonfuredComponent implements OnInit {

  spots$: Observable<Spot[]>;

  constructor(private balatonF: BalatonfuredService) {
    this.spots$ = this.balatonF.getAll();
  }

  ngOnInit(): void {
  }

}
