import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { ConfigGeneratorComponent } from '../config-generator/config-generator.component';

@Component({
  selector: 'app-config-home',
  templateUrl: './config-home.component.html',
  styleUrls: ['./config-home.component.scss']
})
export class ConfigHomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastModifiedOn', 'actions'];
  dataSource;
  configs;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(    private db: AngularFirestore,
                  public dialog: MatDialog,
    ) {
      this.dataSource = new MatTableDataSource();
     }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getconfigData();
  }

  getconfigData() {
    // this.db.collection('configurations').snapshotChanges().subscribe(snaps => {
    //   console.log("We made the db call");
    //   console.log(snaps);
    // });
    // this.db.collection('configurations').get().subscribe(collects => {
    //   console.log("We're printing the collects");
    //   console.log(collects);
    // });
    this.db.collection('configurations').snapshotChanges().subscribe(snaps => {
      this.dataSource = snaps.map(snaps => {
        return {
          id: snaps.payload.doc.id,
          ...snaps.payload.doc.data()
        };
      });
      console.log('this.configs');
      console.log(this.dataSource);
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addNewConfig(type) {
    const dialogRef = this.dialog.open(ConfigGeneratorComponent, {
      width: '80%',
      data: {dialogAction: type}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog Closed");
    });
  }

  editConfig(row) {
    const dialogRef = this.dialog.open(ConfigGeneratorComponent, {
      width: '80%',
      data: {dialogAction: 'edit', id: row.id, data: row}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog Closed");
    });
  }

  deleteConfig(row) {
    const docRef = this.db.firestore.collection('configurations').doc(row.id);
    docRef.delete().then(data => {
      console.log("Record deleted successfully");
    });
  }

  getHumanDate(timestamp) {
    return new Date(timestamp).toLocaleDateString();
  }

}
