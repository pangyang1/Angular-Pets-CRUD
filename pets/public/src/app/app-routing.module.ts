import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetShowComponent } from './pet-show/pet-show.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  {path: 'addPet', component: PetNewComponent},
  {path: 'Pet/:id', component: PetShowComponent},
  {path: 'Pet/:id/edit', component: DeerEditComponent},
  {path: 'Pet', redirectTo: ''},
  {path: '', component: petListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
