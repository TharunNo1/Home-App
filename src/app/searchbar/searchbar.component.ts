import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by City" #filter >
        <button class="Primary" type="button" (click)="filterResults(filter.value)"> Search </button>
      </form>
    </section>
  `,
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  
  @Output('filterResults') filterFeature: EventEmitter<string> = new EventEmitter();

  filterResults(text: string) {
    this.filterFeature.emit(text);    
  }



}
