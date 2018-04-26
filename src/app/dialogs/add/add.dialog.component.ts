import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {FormControl, Validators} from '@angular/forms';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Contact,
              public dataService: ContactService) { }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  id: number;
  name: string;
  address: string;
  contactNumber: string;
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
    this.contact = {
      id: this.id,
      name: this.name,
      address: this.address,
      contactNumbers: {telephoneNumber: this.contactNumber}
    };
    this.dataService.addContact(this.contact);
  }
}
