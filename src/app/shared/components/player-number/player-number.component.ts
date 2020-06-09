import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-player-number',
  templateUrl: './player-number.component.html',
  styleUrls: ['./player-number.component.scss'],
})
export class PlayerNumberComponent implements OnInit {
  
  @Input() numPlayer: Number;
  maxPlayerIcon: Number= 6;

  @Output() changeNumPlayer= new EventEmitter<Number>();
  @Output() plusPlayer= new EventEmitter<any>();
   
  icone : Number[] = [];
  
  constructor() {
  }
  
  ngOnInit() {
    this.initIcone();
    
  }
  
  
  initIcone(){
    // 6 FACCE e 1 PLUS
    for(let index=0; index<=5; index++)
    {
      this.icone[index] = index;
    }
  }

  /**
   * Invia alla pagina il nuovo numero player
   * @param nPlayer Numero Player
   */
  onClickPlayer(nPlayer)
  {
    this.changeNumPlayer.emit(nPlayer);
  }

  /**
   * invia alla pagina la richiesta di aggiunta giocatori
   */
  onClickPlusPlayer()
  {
    this.plusPlayer.emit();
  }
  
}

export enum typeIcon {
  player=10,
  add=20
} 