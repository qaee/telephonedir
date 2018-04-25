import {Injectable} from '@angular/core';
import {Contact} from '../models/contact';
import {CONTACTS} from '../models/mockcontacts';

@Injectable()
export class ContactService {
  constructor () {}
  dialogData: any;

  getAllContacts(): Contact[] {
    return CONTACTS;
  }

  getDialogData() {
    return this.dialogData;
  }

  // DEMO ONLY, you can find working methods below
  addIssue (issue: Contact): void {
    this.dialogData = issue;
  }

  updateIssue (issue: Contact): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }

  filterContacts(value: any) {
    return this.getAllContacts().filter(contact => contact.name.startsWith(value));
  }
}




