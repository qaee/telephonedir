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
  addContact (contact: ContactsEntity): void {
    console.log(contact);
    this.http
      .post(this._url, contact)
      .subscribe(status => console.log(JSON.stringify(status)));
  }
  updateContact (contact: ContactsEntity): void {
    console.table(contact._links.self);
    console.table()
    this.http
      .put(contact._links.self.href, contact)
      .subscribe(
        (val) => {
          console.log("Update call successful value returned in body",
            val);
        },
        response => {
          console.log("Update call in error", response);
        },
        () => {
          console.log("The Update observable is now completed.");
        });

  }
  deleteContact (contact: ContactsEntity): void {
    this.http.
    delete(contact._links.self.href)
      .subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body",
          val);
      },
      response => {
        console.log("DELETE call in error", response);
      },
      () => {
        console.log("The DELETE observable is now completed.");
      });
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
  id?: number;
  name: string;
  address: string;
  email: string;
  contactNumber?: (ContactNumberEntity)[] | null;
  _links?: Links1;
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



