import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 1;

  ngOnInit() {
    this.items = [{
      label: 'Personal',
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
      {
        label: 'Seat',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Payment',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      {
        label: 'Confirmation',
        command: (event: any) => {
          this.activeIndex = 3;
        }
      }
    ];
  }
}
