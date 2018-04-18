import { Component, OnInit } from '@angular/core';
import {CONTACTS} from '../model/mock-contact';
import {Contact} from '../model/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts: Contact[] = CONTACTS;
  ngOnInit() {
  }
}
