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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  constructor( public dialog: MatDialog, private contactService: ContactService) {
    this.dataSource = new MatTableDataSource<Contact>((contactService.getAllContacts()));

  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getLength():number {
    return 5;
  }
  addNew(contact: Contact) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {contact: contact}
    });
  }
  refresh() {
    this.dataSource = new MatTableDataSource<Contact>(this.contactService.getAllContacts());
    this.dataSource.filter = this.filter.nativeElement.value;
  }
  public filterContacts(event: any) {
    let value = event.target.value;
    console.log(value);
    this.dataSource.filter = this.filter.nativeElement.value;
    //let contacts = this.contactService.filterContacts(value);
    //this.dataSource = new MatTableDataSource<Contact>(contacts);
  }
  }
