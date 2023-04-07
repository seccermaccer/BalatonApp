import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Opinion} from "../models/Opinion";

@Injectable({
  providedIn: 'root'
})
export class VelemenyService {

  collectionName = 'Opinions';

  constructor(private afs: AngularFirestore) { }

  create(opinion: Opinion){
    opinion.id = this.afs.createId();
    return this.afs.collection<Opinion>(this.collectionName).doc(opinion.id).set(opinion);
  }

  getAll() {
    return this.afs.collection<Opinion>(this.collectionName).valueChanges();
  }

  update(opinion: Opinion) {
    return this.afs.collection<Opinion>(this.collectionName).doc(opinion.id).set(opinion);
  }

  delete(opinionId: string) {
    return this.afs.collection<Opinion>(this.collectionName).doc(opinionId).delete();
  }

  getById(id: string){
    return this.afs.collection<Opinion>(this.collectionName).doc(id).valueChanges();
  }
}
