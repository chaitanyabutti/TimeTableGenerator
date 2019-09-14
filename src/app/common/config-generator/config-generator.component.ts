// import { ConfigurationTemplate, Subjects, Periods, Classes, Rooms, Activities, Days, Teachers } from './configuration.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Subjects, ConfigurationTemplate, Days, Classes, Periods, Rooms, Activities, Teachers } from './configuration.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-config-generator',
  templateUrl: './config-generator.component.html',
  styleUrls: ['./config-generator.component.scss']
})
export class ConfigGeneratorComponent implements OnInit {
  isLinear = false;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // thirdFormGroup: FormGroup;
  // fourthFormGroup: FormGroup;
  // fifthFormGroup: FormGroup;
  totalArray = new ConfigurationTemplate();
  subjectsThing = new Subjects();
  dialogAction;
  dialogId;
  constructor(
    public dialogRef: MatDialogRef<ConfigGeneratorComponent>,
    private _formBuilder: FormBuilder,
    private db: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.dialogAction = data.dialogAction;
      if (this.dialogAction !== 'addNew' && this.dialogAction !== undefined) {
        this.dialogId = data.id;
        this.totalArray = data.data;
      }
      // if (data.id !== undefined) {
      //   this.dialogId = data.id;
      // }
    }
  ngOnInit() {
    if (this.dialogAction === 'addNew') {
      this.intializeData();
    }
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.thirdFormGroup = this._formBuilder.group({
    //   thirdCtrl: ['', Validators.required]
    // });
    // this.fourthFormGroup = this._formBuilder.group({
    //   fourthCtrl: ['', Validators.required]
    // });
    // this.fifthFormGroup = this._formBuilder.group({
    //   fifthCtrl: ['', Validators.required]
    // });
  }

  intializeData() {
    // this.totalArray = this.configurationTemplate;
    this.totalArray.Subjects = [];
    this.totalArray.Classes = [];
    this.totalArray.Activities = [];
    this.totalArray.Periods = [];
    this.totalArray.Rooms = [];
    this.totalArray.Days = [];
    this.totalArray.Teachers = [];
    this.totalArray.Subjects[0] = new Subjects();
    this.totalArray.Classes[0] = new Classes();
    this.totalArray.Activities[0] = new Activities();
    this.totalArray.Periods[0] = new Periods();
    this.totalArray.Rooms[0] = new Rooms();
    this.totalArray.Teachers[0] = new Teachers();
    this.totalArray.Days[0] = new Days();
    this.totalArray.Days[0].name = 'Monday';
    this.totalArray.Days[0].shortName = 'Mon';
    this.totalArray.Days[1] = new Days();
    this.totalArray.Days[1].name = 'Tuesday';
    this.totalArray.Days[1].shortName = 'Tue';
    this.totalArray.Days[2] = new Days();
    this.totalArray.Days[2].name = 'Wednesday';
    this.totalArray.Days[2].shortName = 'Wed';
    this.totalArray.Days[3] = new Days();
    this.totalArray.Days[3].name = 'Thursday';
    this.totalArray.Days[3].shortName = 'Thu';
    this.totalArray.Days[4] = new Days();
    this.totalArray.Days[4].name = 'Friday';
    this.totalArray.Days[4].shortName = 'Fri';
    console.log('totalarray is coming in intialization');
    console.log(this.totalArray);
    // this.totalArray.days[0] = {name: 'Monday', shortName: 'Mon'};
    // this.totalArray.days[1] = {name: 'Tuesday', shortName: 'Tue'};
    // this.totalArray.days[2] = {name: 'Wednesday', shortName: 'Wed'};
    // this.totalArray.days[3] = {name: 'Thursday', shortName: 'Thu'};
    // this.totalArray.days[4] = {name: 'Friday', shortName: 'Fri'};
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // addButton(type, index) {
  //   if (type === 'subjects') {
  //     this.totalArray.subjects[index + 1] = this.subjects;
  //   } else if (type === 'teachers') {
  //     this.totalArray.teachers[index + 1] = this.teachers;
  //   } else if ( type === 'classes') {
  //     this.totalArray.classes[index + 1] = this.classes;
  //   } else if (type === 'days') {
  //     this.totalArray.days[index + 1] = this.days;
  //   } else if (type === 'periods') {
  //     this.totalArray.periods[index + 1] = this.periods;
  //   } else if (type === 'rooms') {
  //     this.totalArray.rooms[index + 1] = this.rooms;
  //   } else if (type === 'activities') {
  //     this.totalArray.activities[index + 1] = this.activities;
  //   }
  // }

  addButton(type, index) {
    if (type === 'Subjects') {
      this.totalArray.Subjects[index + 1] = new Subjects();
    } else if (type === 'Teachers') {
      this.totalArray.Teachers[index + 1] = new Teachers();
      // this.totalArray.teachers[index + 1] = [];
    } else if ( type === 'Classes') {
      this.totalArray.Classes[index + 1] = new Classes();
      // this.totalArray.classes[index + 1] = [];
    } else if (type === 'Days') {
      this.totalArray.Days[index + 1] = new Days();
      // this.totalArray.days[index + 1] = [];
    } else if (type === 'Periods') {
      this.totalArray.Periods[index + 1] = new Periods();
      // this.totalArray.periods[index + 1] = [];
    } else if (type === 'Rooms') {
      this.totalArray.Rooms[index + 1] = new Rooms();
      // this.totalArray.rooms[index + 1] = [];
    } else if (type === 'Activities') {
      this.totalArray.Activities[index + 1] = new Activities();
      // this.totalArray.activities[index + 1] = [];
    }
  }

  removeButton(type, index) {
    if (type === 'Subjects') {
      // this.totalArray.subjects[index] = undefined;
      this.totalArray.Subjects.splice(index, 1);
      // this.totalArray.subjects.splice(index, 1);
    } else if (type === 'Teachers') {
      // this.totalArray.teachers[index] = undefined;
      this.totalArray.Teachers.splice(index, 1);
      // this.totalArray.teachers.splice(index, 1);
    } else if ( type === 'Classes') {
      // this.totalArray.classes[index] = undefined;
      // this.totalArray.classes.splice(index, 1);
      this.totalArray.Classes.splice(index, 1);
    } else if (type === 'Days') {
      // this.totalArray.days[index] = undefined;
      // this.totalArray.days.splice(index, 1);
      this.totalArray.Days.splice(index, 1);
    } else if (type === 'Periods') {
      // this.totalArray.periods.splice(index, 1);
      this.totalArray.Periods.splice(index, 1);
    } else if (type === 'Rooms') {
      // this.totalArray.rooms.splice(index, 1);
      this.totalArray.Rooms.splice(index, 1);
    } else if (type === 'Activities') {
      // this.totalArray.activities.splice(index, 1);
      this.totalArray.Activities.splice(index, 1);
    }
  }

  saveData() {
    console.log('Save data is invoked');
    console.log(this.totalArray);
    this.totalArray.timestamp = Date.now();
    switch (this.dialogAction) {
      case 'addNew': {
        const convertedJSON = JSON.parse(JSON.stringify(this.totalArray));
        this.db.firestore.collection('configurations').add(convertedJSON).then(data => {
          console.log("Record added successfully");
        });
      }              break;
      case 'edit': {
        const convertedJSON = JSON.parse(JSON.stringify(this.totalArray));
        const docRef = this.db.firestore.collection('configurations').doc(this.dialogId);
        docRef.update(convertedJSON).then(data => {
          console.log('Record updated successfully.');
        });
      }            break;
    }
    this.dialogRef.close();
  }
}
