import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../model/contact';


@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent  implements OnInit {
  contact: Contact;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddcontactComponent>,
    @Inject(MAT_DIALOG_DATA)private data: {contact: Contact}) {
      this.contact = data.contact;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}
