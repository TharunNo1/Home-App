import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingLocationService {
  // protected housingLocationList:HousingLocation[] = [];
  url = "http://localhost:3000/locations"
  housingLocationList: HousingLocation[] = [];
  filteredHousingLocationList: HousingLocation[] = [];
  
  constructor() { 
  }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number) : Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  filterResults(filterString: string, housingLocationList: HousingLocation[]) : HousingLocation[] {
    this.housingLocationList = housingLocationList;
    return this.housingLocationList.filter(housingLocation => housingLocation.city.toLowerCase().includes(filterString.toLowerCase()));
  }
}
