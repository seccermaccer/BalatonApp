import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs";
import {Spot} from "../models/Spot";

@Injectable({
  providedIn: 'root'
})
export class VelemenyekService {

  constructor(private firestore: AngularFirestore) { }

  getCommentsBySpotName(spotName: string) {
    return this.firestore.collection('Opinions', ref => ref.where('spotname', '==', spotName)).get().pipe(
      map(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
    );
  }

}
