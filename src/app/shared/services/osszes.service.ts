import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../models/User";
import {Spot} from "../models/Spot";

@Injectable({
  providedIn: 'root'
})
export class OsszesService {

  collectionName = 'Spots';

  constructor(private firestore: AngularFirestore) { }

  getAll() {
    return this.firestore.collection<Spot>(this.collectionName).valueChanges();
  }
}
