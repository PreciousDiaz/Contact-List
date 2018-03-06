import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

postCollection: AngularFirestoreCollection<Post>;
//^Any name will do 
post: Observable<Post[]>

constructor(private afs:AngularFirestore) {

}

ngOnInit() {
 this.postCollection = this.afs.collection('posts');
 this.post = this.postCollection.valueChanges();
}

}
