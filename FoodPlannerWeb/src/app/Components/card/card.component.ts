import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Basic cards
 */
@Component({
  selector: 'food-planner-card',
  templateUrl: 'card.component.html',
  standalone: false
})
export class Card {
  @Input() cardMessage: string = "";

}
