import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name: string = '';
  messageFromChild: string = '';

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }
}
