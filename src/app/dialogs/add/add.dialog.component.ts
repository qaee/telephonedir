import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Contact, ContactsEntity, ContactService} from '../../services/contact.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ContactsEntity,
              public dataService: ContactService) { }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  id: number;
  name: string;
  address: string;
  contactNumber: number;
  contact: Contact;
  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }
  submit() {
  // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
   /* this.contact = {
      id: this.id,
      name: this.name,
      address: this.address,
      contactNumber: {telephoneNumber: this.contactNumber}
    };
    this.dataService.addContact(this.contact);*/
  }
}
