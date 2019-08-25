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
                console.log("We're printing firebase objects");
                this.configurationTemplates = db.collection('configurationtemplates').valueChanges().subscribe(val => {
                  console.log(val);
                });
                // console.log(this.configurationTemplates);
  }

  ngOnInit() {
    console.log('We\'re in GeneratorHome component');
  }

  openConfigGenerator() {
    console.log('We\'re in config Generator method');

    const dialogRef = this.dialog.open(ConfigGeneratorComponent, {
      width: '80%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
