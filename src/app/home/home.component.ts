import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Contact} from '../models/contact';
import {CONTACTS} from '../models/mockcontacts';
import {AddDialogComponent} from '../dialogs/add/add.dialog.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource = new MatTableDataSource<Contact>((CONTACTS));
  displayedColumns = ['id', 'Name', 'address', 'contactNumbers', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  constructor( public dialog: MatDialog) { }
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
    CONTACTS.splice(0, 1);
    this.dataSource = new MatTableDataSource<Contact>((CONTACTS));
  }
  public loadData() {
    CONTACTS.splice(0, 1);
    this.dataSource = new MatTableDataSource<Contact>((CONTACTS));
  }
  }
