import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../player.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  // @ts-ignore
  playerForm: FormGroup;
  // @ts-ignore
  id: number;
  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((parammap: ParamMap) => {
      // @ts-ignore
      this.id = parammap.get('id');
      this.getPlayer(this.id);
    })
  }

  ngOnInit(): void {
  }
  getPlayer(id: number) {
    return this.playerService.findById(id).subscribe(player => {
      this.playerForm = new FormGroup({
        name: new FormControl(player.name),
        champ: new FormControl(player.champ),
        kda: new FormControl(player.kda),
        des: new FormControl(player.des)
      })
    })
  }
  update(id: number) {
const player = this.playerForm.value;
this.playerService.edit(id,player).subscribe(() => {
alert('Update player successfully!');
}, error => {
  console.log(error);
})
  }
}
