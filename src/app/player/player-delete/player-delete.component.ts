import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../player.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {
  // @ts-ignore
  playerForm: FormGroup;
  // @ts-ignore
  id: number;
  constructor(private playerService: PlayerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((prammap: ParamMap) => {
      // @ts-ignore
      this.id = +prammap.get('id');
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
  delete(id: number) {
    this.playerService.delete(id).subscribe(() => {
this.router.navigate(['/players']);
    }, error => {
      console.log(error);
    })
  }
}
