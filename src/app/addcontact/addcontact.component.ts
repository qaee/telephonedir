import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent  implements OnInit {
  animal: string;
  name: string;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddcontactComponent>,
    @Inject(MAT_DIALOG_DATA) {name}: string) {
      this.name = name;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}
