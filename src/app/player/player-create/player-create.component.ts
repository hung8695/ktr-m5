import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../player.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  // @ts-ignore
  playerForm =new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  })
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }
submit(){
const player = this.playerForm.value;
this.playerService.save(player).subscribe(() => {
  this.playerForm.reset();
  alert('Create new player successfully!')
}, error => {
  console.log(error);
})
}
}
