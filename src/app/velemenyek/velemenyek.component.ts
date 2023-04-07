import { Component, OnInit } from '@angular/core';
import {VelemenyekService} from "../shared/services/velemenyek.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-velemenyek',
  templateUrl: './velemenyek.component.html',
  styleUrls: ['./velemenyek.component.scss']
})
export class VelemenyekComponent implements OnInit {

  matchedComments: any[] | undefined;
  spotName: string;

  constructor(private velemenyS: VelemenyekService, private route: ActivatedRoute) {
    this.spotName = this.route.snapshot.paramMap.get('spotname') || '';
  }

  ngOnInit(): void {
    this.getCommentsBySpotName();
  }

  getCommentsBySpotName(): void {
    this.velemenyS.getCommentsBySpotName(this.spotName).subscribe(result => {
      this.matchedComments = result;
    });
  }

}
