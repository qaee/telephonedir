import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AddDialogComponent} from '../dialogs/add/add.dialog.component';
import {Contact, ContactsEntity, ContactService} from '../services/contact.service';
import {EditDialogComponent} from '../dialogs/edit/edit.dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contacts: ContactsEntity[];
  dataSource;
  displayedColumns = ['Name', 'Address', 'Email', 'ContactNumber', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
  constructor( public dialog: MatDialog, private contactService: ContactService) {}
  ngOnInit() {
    this.getContacts();
  }
  ngAfterViewInit() {
   /* this.dataSource.paginator = this.paginator;*/
  }
  getContacts() {
    this.contactService
      .getContacts()
      .subscribe(resp => {
        this.contacts = resp._embedded.contacts;
        this.dataSource = new MatTableDataSource<ContactsEntity>(this.contacts);
      });
  }
  getLength(): number {
    return 0;
  }
  addNew(contact: Contact) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {contact: contact}
    });
    this.getContacts();
  }
  refresh() {
    this.getContacts();
    this.dataSource = new MatTableDataSource<ContactsEntity>(this.contacts);
    this.dataSource.filter = this.filter.nativeElement.value;
  }
  public filterContacts(event: any) {
    this.dataSource.filter = this.filter.nativeElement.value;
  }

  startEdit(contact: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {contact: contact}
    });
    this.getContacts();
    this.dataSource = new MatTableDataSource<ContactsEntity>(this.contacts);
  }

  deleteItem(data: any) {
    this.contactService.deleteContact(data);
  }
}
