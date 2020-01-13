import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  username: string ;
  @Input() notifications: any[];
  @Output() usernameEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendName() {
    this.usernameEmitter.emit(this.username); // emit username on click
    console.log(this.username);
  }
}
