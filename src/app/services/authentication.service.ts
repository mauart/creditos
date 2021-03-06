import { Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }
  signin(email: any, password: any) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.afAuth.auth.signOut();
  }
  authStateChange() {
    return this.afAuth.authState;
  }
  getActiveUser() { return this.afAuth.auth.currentUser; }
}
