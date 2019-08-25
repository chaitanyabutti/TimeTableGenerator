import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClassesdialogComponent } from '../classesdialog/classesdialog.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mapperdialog',
  templateUrl: './mapperdialog.component.html',
  styleUrls: ['./mapperdialog.component.scss']
})
export class MapperdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClassesdialogComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }
  ngOnInit() {
  }

}
