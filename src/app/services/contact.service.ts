import {Injectable} from '@angular/core';
import {Contact} from '../models/contact';
import {CONTACTS} from '../models/mockcontacts';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import {catchError, retry, tap} from 'rxjs/operators';
@Injectable()
export class ContactService {
  constructor (private http: HttpClient) {}
  _url = "/assets/data/contacts.json";
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact>(this._url);
  }
  addContact (contact: Contact): void {
    console.log(contact);
  }
  updateIssue (contact: Contact): void {
    console.log(contact);
  }
  deleteIssue (id: number): void {
    console.log(contact);
  }
}




