import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

var firebaseConfig = {
  apiKey: "AIzaSyA3S0VBldi81pJG4hdfc9EE3GQQ9lBBMVU",
  authDomain: "contact-list-ca149.firebaseapp.com",
  databaseURL: "https://contact-list-ca149.firebaseio.com",
  projectId: "contact-list-ca149",
  storageBucket: "contact-list-ca149.appspot.com",
  messagingSenderId: "1060779367615"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
