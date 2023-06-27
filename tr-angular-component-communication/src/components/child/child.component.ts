import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childName: string = '';
  @Output() messageFromChild: EventEmitter<string> = new EventEmitter<string>();

  sendMessage() {
    this.messageFromChild.emit('Message from Child');
  }
}
