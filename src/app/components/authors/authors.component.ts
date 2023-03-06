import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent {
  data: number;
  //String - The type of data I want to pass from the CHILD >> PARENT
  @Output() myData = new EventEmitter<string>();

  btnClick(): void {
    this.myData.emit('From 🧒 >> 👩‍❤️‍👨(parent)');
  }
}
