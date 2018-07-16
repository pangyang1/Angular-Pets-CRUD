mport { DeerService } from './../pet.service';
import { Component, OnInit } from '@angular/core';
import { Deer } from '../pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: pet[];

  constructor(private _dService: PetService) { }

  ngOnInit() {
    // call the service to retrieve all deers, expect an observable
    this.getPets();
  }

  getPets(){
    this._dService.getPets().subscribe(pets => this.pets = pets as pet[]);
  }

  deletePets(id: String){
    this._dService.deletePets(id).subscribe(response => {
      this.getPets();
    });
  }
}
