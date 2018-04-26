import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Contact} from '../models/contact';
import {CONTACTS} from '../models/mockcontacts';
import {AddDialogComponent} from '../dialogs/add/add.dialog.component';
import {Observable} from 'rxjs/Observable';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource;
  displayedColumns = ['id', 'Name', 'address', 'contactNumbers', 'actions'];
  contacts: Contact[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  constructor( public dialog: MatDialog, private contactService: ContactService) {
    this.contactService
      .getAllContacts()
      .subscribe( data => this.contacts = data);
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource<Contact>(this.contacts);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getLength(): number {
    return 0;
  }
  addNew(contact: Contact) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {contact: contact}
    });
  }
  refresh() {
    this.dataSource = new MatTableDataSource<Contact>(this.contacts);
    this.dataSource.filter = this.filter.nativeElement.value;
  }
  public filterContacts(event: any) {
    this.dataSource.filter = this.filter.nativeElement.value;
  }
  }
