import { PetService } from './../pet.service';
import { Pet } from './../pet';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  pet: Pet = new Pet();
  errors: Boolean = false;

  constructor(private _dService: PetService, private _router: Router) { }

  ngOnInit() {
  }

  addPet() {
    // send data to the deer sevice
    this._dService.addPet(this.pet).subscribe((result) => {
      if (result['message'] === 'success') {
        this.pet = new Pet();
        this._router.navigate(['pet']);
      } else {
        this.errors = true;
        console.log(result['errors']);
      }
    });
    // redirect to the root route
  }

}
