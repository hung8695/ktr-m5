import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerListComponent} from "./player/player-list/player-list.component";
import {PlayerCreateComponent} from "./player/player-create/player-create.component";
import {PlayerEditComponent} from "./player/player-edit/player-edit.component";
import {PlayerDetailComponent} from "./player/player-detail/player-detail.component";
import {PlayerDeleteComponent} from "./player/player-delete/player-delete.component";

const routes: Routes = [
  {
    path: 'players',
    component: PlayerListComponent
  },
  {
    path: 'player/create',
    component: PlayerCreateComponent
  },
  {
    path: 'player/edit',
    component: PlayerEditComponent
  },
  {
    path: 'player/view',
    component: PlayerDetailComponent
  },
  {
    path: 'player/delete',
    component: PlayerDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
