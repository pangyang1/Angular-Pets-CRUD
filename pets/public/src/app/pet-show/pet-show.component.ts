import { PetService } from './../pet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-show',
  templateUrl: './pet-show.component.html',
  styleUrls: ['./pet-show.component.css']
})
export class PetShowComponent implements OnInit {
  pet: Pet;

  constructor(private _dService: PetService, private _aRouter: ActivatedRoute) { }

  ngOnInit() {
    this._aRouter.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._dService.getOnePet(params['id']).subscribe(pet => this.pet = pet as Pet);
    });
  }

}
