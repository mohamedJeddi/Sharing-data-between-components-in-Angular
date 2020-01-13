import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  username = 'Gedo';
  notifications = [
    { id: 1, message: 'This is the first notification' },
    { id: 2, message: 'This is the second notification' },
  ];

  constructor() { }

  ngOnInit() {
  }

  recieveUsername($event) {
    this.username = $event;
    console.log($event);
  }
}
