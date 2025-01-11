import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from '../housing-location';
import { HousingLocationService } from '../housing-location.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SearchbarComponent, HousingLocationComponent, CommonModule],
  template: `
    <app-searchbar (filterResults)="filterResults($event)"></app-searchbar>
    <section class="results">
    <app-housing-location *ngFor="let housingLocation of filteredhousingLocationList" [housingLocation]="housingLocation" ></app-housing-location>
    </section>
  `,
  styleUrl: './content.component.css'
})
export class ContentComponent {
  housingLocationList: HousingLocation[] = [];
  housingLocationService: HousingLocationService = inject(HousingLocationService);
  filteredhousingLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationService.getAllHousingLocations().then(
      housingLocationList => { 
        this.housingLocationList = housingLocationList;
        this.filteredhousingLocationList = housingLocationList;
      }
    );
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredhousingLocationList = this.housingLocationList;
    }
    else {
      this.filteredhousingLocationList = this.housingLocationService.filterResults(text, this.housingLocationList);
    }
    
  }

}
