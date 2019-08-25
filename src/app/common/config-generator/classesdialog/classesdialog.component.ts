import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-classesdialog',
  templateUrl: './classesdialog.component.html',
  styleUrls: ['./classesdialog.component.scss']
})
export class ClassesdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClassesdialogComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }
  ngOnInit() {
  }

}
