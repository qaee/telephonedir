import {Injectable} from '@angular/core';
import {Contact} from '../models/contact';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ContactService {
  conts: Contact[];
  _url = '/assets/data/contacts.json';
  constructor (private http: HttpClient) {}
  public getContacts() {
    return this.http.get<Contact[]>(this._url);
  }
  addContact (contact: Contact): void {
    console.log(contact);
  }
  updateIssue (contact: Contact): void {
    console.log(contact);
  }
  deleteIssue (id: number): void {
 //   console.log(contact);
  }
}




