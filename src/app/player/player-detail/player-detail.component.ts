import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../player.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Player} from "../../player";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  player: Player
  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
      // @ts-ignore
      this.id = pramMap.get('id');
      this.getPlayer(this.id);

    })
  }

  ngOnInit(): void {
  }
  getPlayer(id: number) {
    this.playerService.findById(id).subscribe((player) => {
      this.player = player;
    })
  }

}
