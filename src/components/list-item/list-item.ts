import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {

  @Input() items: any;
  text: string;

  constructor() {
    console.log('Hello ListItemComponent Component');
    this.text = 'Hello World';
  }

}
