import { Injectable } from '@angular/core';
import {Contact} from './model/contact';
import {CONTACTS} from './model/mock-contact';

@Injectable()
export class ContactService {

  constructor() { }

  getContacts(): Contact[] {
    return CONTACTS;
  }
}
