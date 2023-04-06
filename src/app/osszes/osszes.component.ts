import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Spot} from "../shared/models/Spot";
import {OsszesService} from "../shared/services/osszes.service";

@Component({
  selector: 'app-osszes',
  templateUrl: './osszes.component.html',
  styleUrls: ['./osszes.component.scss']
})
export class OsszesComponent implements OnInit {
  spots$: Observable<Spot[]>;

  constructor(private osszes: OsszesService) {
    this.spots$ = this.osszes.getAll();
  }

  ngOnInit(): void {
  }

}
