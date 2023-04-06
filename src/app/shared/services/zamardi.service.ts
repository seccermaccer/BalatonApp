import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Spot} from "../models/Spot";

@Injectable({
  providedIn: 'root'
})
export class ZamardiService {

  collectionName = 'Spots';

  constructor(private firestore: AngularFirestore) { }

  getAll() {
    return this.firestore.collection<Spot>(this.collectionName, ref =>
      ref.where('location', '==', 'Zamárdi').orderBy('name')).valueChanges();
  }
}
