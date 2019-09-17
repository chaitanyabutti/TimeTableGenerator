import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/services/data.service';
import { ConfigurationTemplate } from 'src/app/common/config-generator/configuration.model';
import { Grid } from '../grid-model';

@Component({
  selector: 'app-generator-home',
  templateUrl: './generator-home.component.html',
  styleUrls: ['./generator-home.component.scss']
})
export class GeneratorHomeComponent implements OnInit {

  noOfCols;
  noOfRows;
  noOfDays;
  rowHeight;
  configurationTemplates;
  selectedConfiguration;
  workItem;
  gridStrctures = [];

  constructor(public dialog: MatDialog,
              private db: AngularFirestore) {
                // this.configurationTemplates = db.collection('configurationtemplates').valueChanges().subscribe(val => {
                // });
                // console.log(this.configurationTemplates);
  }

  ngOnInit() {
    this.noOfDays = 1;
    this.noOfRows = 1;
    this.noOfCols = 2;
    // this.rowHeight = this.noOfCols + ':' + this.noOfRows;
    this.getConfigData();
  }

  getConfigData() {
    this.db.collection('configurations').snapshotChanges().subscribe(snaps => {
      this.configurationTemplates = snaps.map(snaps => {
        return {
          id: snaps.payload.doc.id,
          ...snaps.payload.doc.data()
        };
      });
    });
  }

  scheduleTimeTable() {
    this.workItem = this.configurationTemplates[0];
    this.noOfRows = this.workItem.Classes.length;
    this.noOfRows = this.workItem.Periods.length;
    this.noOfDays = this.workItem.Days.length;
    this.initializeGridStructure();
  }

  initializeGridStructure() {
    this.noOfDays.forEach((day, dayIndex) => {
      this.noOfRows.forEach((row, rowIndex) => {
        this.noOfCols.forEach((column, columnIndex) => {
          // if (dayIndex === 0 && rowIndex === 0 && columnIndex === 0) {
            this.gridStrctures[dayIndex][rowIndex][columnIndex] = new Grid();
            this.gridStrctures[dayIndex][rowIndex][columnIndex].metaData = false;
            this.gridStrctures[dayIndex][rowIndex][columnIndex].textContent = dayIndex + ',' + rowIndex + ',' + columnIndex;
            this.gridStrctures[dayIndex][rowIndex][columnIndex].textColor = 'black';
            this.gridStrctures[dayIndex][rowIndex][columnIndex].gridSpan = 1;
            this.gridStrctures[dayIndex][rowIndex][columnIndex].gridColor = 'purple';
            this.gridStrctures[dayIndex][rowIndex][columnIndex].rowPos = rowIndex;
            this.gridStrctures[dayIndex][rowIndex][columnIndex].colPos = columnIndex;
          // }
          // this.gridStrctures[0]
        });
      });
    });
    console.log("Filled up gridStructure");
    console.log(this.gridStrctures);
  }

}
