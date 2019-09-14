import { AngularFirestore } from '@angular/fire/firestore';
import { OnInit } from '@angular/core';


export class DataService implements OnInit  {
    constructor(private db: AngularFirestore) {
    }
    configDocs;

    ngOnInit() {
        this.getConfigDocs();
    }

    getConfigDocs() {
        this.db.collection('configurations').snapshotChanges().subscribe(snaps => {
            // this.configDocs = snaps.map(snap => {
            //     return {
            //         id: snap.payload.doc.id,
            //         ...snap.payload.doc.data()
            //       };
            // });
            this.configDocs = snaps.map(snaps => {
                return {
                  id: snaps.payload.doc.id,
                  ...snaps.payload.doc.data()
                };
              });
            console.log("in getconfigDocs");
            console.log(this.configDocs);
        });
    }
}
