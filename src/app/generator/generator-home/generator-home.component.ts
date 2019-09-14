import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-generator-home',
  templateUrl: './generator-home.component.html',
  styleUrls: ['./generator-home.component.scss']
})
export class GeneratorHomeComponent implements OnInit {

  noOfCols;
  noOfRows;
  rowHeight;
  configurationTemplates;
  selectedConfiguration;

  constructor(public dialog: MatDialog,
              private db: AngularFirestore) {
                // this.configurationTemplates = db.collection('configurationtemplates').valueChanges().subscribe(val => {
                // });
                // console.log(this.configurationTemplates);
  }

  ngOnInit() {
    this.noOfCols = 5;
    this.noOfRows = 4;
    this.rowHeight = this.noOfCols + ':' + this.noOfRows;
    this.intiliazeGridStructure();
  }

  intiliazeGridStructure() {
    this.db.collection('configurations').snapshotChanges().subscribe(snaps => {
      this.configurationTemplates = snaps.map(snaps => {
        return {
          id: snaps.payload.doc.id,
          ...snaps.payload.doc.data()
        };
      });
    });
  }

  scheduleTimeTable(data) {

  }

}
