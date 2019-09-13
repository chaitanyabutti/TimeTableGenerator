import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigGeneratorComponent } from '../../common/config-generator/config-generator.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-generator-home',
  templateUrl: './generator-home.component.html',
  styleUrls: ['./generator-home.component.scss']
})
export class GeneratorHomeComponent implements OnInit {

  noOfCols = 5;
  configurationTemplates;

  constructor(public dialog: MatDialog,
              private db: AngularFirestore) {
                // this.configurationTemplates = db.collection('configurationtemplates').valueChanges().subscribe(val => {
                // });
                // console.log(this.configurationTemplates);
  }

  ngOnInit() {
  }

  // openConfigGenerator() {

  //   const dialogRef = this.dialog.open(ConfigGeneratorComponent, {
  //     width: '80%',
  //     data: {}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     // this.animal = result;
  //   });
  // }

}
