import { Component, HostListener, OnInit  } from '@angular/core';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {
  isMobileView: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 768;
  }
  deliveryList = [
    { firstName: 'William', lastName: 'Shakespeare', address: 'England', wish: 'Books' },
    { firstName: 'JRR', lastName: 'Tolkien', address: 'England', wish: 'Pen' },
    { firstName: 'Charles', lastName: 'Dickens', address: 'England', wish: 'Teddy Bear' },
    { firstName: 'Agatha', lastName: 'Christie', address: 'England', wish: 'Knife' },

    // 20 empty rows will be added dynamically after Agatha Christie

    { firstName: 'JK', lastName: 'Rolling', address: 'England', wish: 'Hat' }
  ];

  // Empty rows array (20 empty rows)
  emptyRows = Array(10);

  isHighlighted(person: any): boolean {
    return (
      (person.firstName === 'William' && person.lastName === 'Shakespeare') ||
      (person.firstName === 'Agatha' && person.lastName === 'Christie')
    );
  }


  pages = [1, 2, 3, 4, 5, 18, 37, 38, 39, 41, 42];

}
