import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClassesdialogComponent } from '../classesdialog/classesdialog.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-roomsdialog',
  templateUrl: './roomsdialog.component.html',
  styleUrls: ['./roomsdialog.component.scss']
})
export class RoomsdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClassesdialogComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }
  ngOnInit() {
  }

}
