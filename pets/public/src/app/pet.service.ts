import { Pet } from './pet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PetService {

  constructor(private _http: HttpClient) { }

  getPets() {
    return this._http.get('/pets');
  }

  addPet(pet: Pet){
    return this._http.post('/pets', pet);
  }

  getOnepet(id: String){
    return this._http.get(`/pets/${id}`);
  }

  updatePet(id: String, pet: pet){
    return this._http.put(`/pets/${id}`, pet);
  }

  deletepet(id: String){
    return this._http.delete(`/pets/${id}`);
  }

}
