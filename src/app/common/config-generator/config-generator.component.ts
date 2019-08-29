import { ConfigurationTemplate, Subjects, Periods, Classes, Rooms, Activities, Days, Teachers } from './configuration.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-config-generator',
  templateUrl: './config-generator.component.html',
  styleUrls: ['./config-generator.component.scss']
})
export class ConfigGeneratorComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  totalArray: any = [];
  // tslint:disable-next-line: max-line-length
  // totalArray: ConfigurationTemplate = new ConfigurationTemplate('', {name: '', shortName: ''}, {name: '', shortName: '', startTime: new Time(), endTime: ''}, {name: '', shortName: '', code: ''}, {name: '', shortName: '', capacity: '', building: ''}, {name: '', shortName: '','','',''}, {name: '', shortName: '','','',''}, {name: '', shortName: '','','','',''});
  constructor(
    public dialogRef: MatDialogRef<ConfigGeneratorComponent>,
    private _formBuilder: FormBuilder,
    // private subjects: Subjects,
    // private rooms: Rooms,
    // private activities: Activities,
    // private classes: Classes,
    // private periods: Periods,
    // private days: Days,
    // private teachers: Teachers,
    // private configurationTemplate: ConfigurationTemplate,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }
  ngOnInit() {
    this.intializeData();
    console.log("We're in the dialog component");
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

  intializeData() {
    // this.totalArray = this.configurationTemplate;
    // this.totalArray.subjects = [];
    // this.totalArray.classes = [];
    // this.totalArray.teachers = [];
    // this.totalArray.students = [];
    // this.totalArray.periods = [];
    // this.totalArray.days = [];
    // this.totalArray.rooms = [];
    // this.totalArray.activities = [];
    // this.totalArray.subjects[0] = ;
    // this.totalArray.classes[0] = [];
    // this.totalArray.teachers[0] = [];
    // this.totalArray.students[0] = [];
    // this.totalArray.periods[0] = [];
    // this.totalArray.rooms[0] = [];
    // this.totalArray.activities[0] = [];
    // this.totalArray.days[0] = {name: 'Monday', shortName: 'Mon'};
    // this.totalArray.days[1] = this.days;
    // this.totalArray.days[1] = {name: 'Tuesday', shortName: 'Tue'};
    // this.totalArray.days[2] = {name: 'Wednesday', shortName: 'Wed'};
    // this.totalArray.days[3] = {name: 'Thursday', shortName: 'Thu'};
    // this.totalArray.days[4] = {name: 'Friday', shortName: 'Fri'};
    this.totalArray.subjects = [];
    this.totalArray.classes = [];
    this.totalArray.teachers = [];
    this.totalArray.students = [];
    this.totalArray.periods = [];
    this.totalArray.days = [];
    this.totalArray.rooms = [];
    this.totalArray.activities = [];
    this.totalArray.subjects[0] = [];
    this.totalArray.classes[0] = [];
    this.totalArray.teachers[0] = [];
    this.totalArray.students[0] = [];
    this.totalArray.periods[0] = [];
    this.totalArray.rooms[0] = [];
    this.totalArray.activities[0] = [];
    this.totalArray.days[0] = {name: 'Monday', shortName: 'Mon'};
    this.totalArray.days[1] = {name: 'Tuesday', shortName: 'Tue'};
    this.totalArray.days[2] = {name: 'Wednesday', shortName: 'Wed'};
    this.totalArray.days[3] = {name: 'Thursday', shortName: 'Thu'};
    this.totalArray.days[4] = {name: 'Friday', shortName: 'Fri'};
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
    if (type === 'subjects') {
      this.totalArray.subjects[index + 1] = [];
    } else if (type === 'teachers') {
      this.totalArray.teachers[index + 1] = [];
    } else if ( type === 'classes') {
      this.totalArray.classes[index + 1] = [];
    } else if (type === 'days') {
      this.totalArray.days[index + 1] = [];
    } else if (type === 'periods') {
      this.totalArray.periods[index + 1] = [];
    } else if (type === 'rooms') {
      this.totalArray.rooms[index + 1] = [];
    } else if (type === 'activities') {
      this.totalArray.activities[index + 1] = [];
    }
  }

  removeButton(type, index) {
    if (type === 'subjects') {
      // this.totalArray.subjects[index] = undefined;
      this.totalArray.subjects.splice(index, 1);
    } else if (type === 'teachers') {
      // this.totalArray.teachers[index] = undefined;
      this.totalArray.teachers.splice(index, 1);
    } else if ( type === 'classes') {
      // this.totalArray.classes[index] = undefined;
      this.totalArray.classes.splice(index, 1);
    } else if (type === 'days') {
      // this.totalArray.days[index] = undefined;
      this.totalArray.days.splice(index, 1);
    } else if (type === 'periods') {
      this.totalArray.periods.splice(index, 1);
    } else if (type === 'rooms') {
      this.totalArray.rooms.splice(index, 1);
    } else if (type === 'activities') {
      this.totalArray.activities.splice(index, 1);
    }
  }
}
