import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingLocationService } from '../housing-location.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocation: HousingLocation | undefined;
  housingLocationService: HousingLocationService = inject(HousingLocationService);
  applyForm = new FormGroup( {
    firstName : new FormControl(""),
    lastName : new FormControl(""),
    emailId : new FormControl("")
  }
  )

  constructor() {
     const housingLocationId = Number(this.route.snapshot.params['id']);
     this.housingLocationService.getHousingLocationById(housingLocationId).then(
      housingLocation => this.housingLocation = housingLocation
     );
  }

  submitApplication() {
    
    this.housingLocationService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.emailId ?? ''
    )
  }
}
