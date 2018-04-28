import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ContactService {
  conts: Contact[];
  /*_url = '/assets/data/contacts.json';*/
  _url = 'http://localhost:8080/contacts';
  constructor (private http: HttpClient) {}
  public getContacts() {
   /* this.http.get<string>(this._url).pipe(
      tap(res => console.log(res))
    );*/
    return this.http.get<Contact>(this._url);
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

export interface Contact {
  _embedded: Embedded;
  _links: Links;
}
export interface Embedded {
  contacts?: (ContactsEntity)[] | null;
}
export interface ContactsEntity {
  name: string;
  address: string;
  email: string;
  contactNumber?: (ContactNumberEntity)[] | null;
  _links: Links1;
}
export interface ContactNumberEntity {
  telephoneNumber: string;
}
export interface Links1 {
  self: SelfOrContactOrProfile;
  contact: SelfOrContactOrProfile;
}
export interface SelfOrContactOrProfile {
  href: string;
}
export interface Links {
  self: SelfOrContactOrProfile;
  profile: SelfOrContactOrProfile;
}



