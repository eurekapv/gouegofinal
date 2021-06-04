import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton, PickerColumn, PickerColumnOption } from '@ionic/core';



@Component({
  selector: 'app-player-number',
  templateUrl: './player-number.component.html',
  styleUrls: ['./player-number.component.scss'],
})
export class PlayerNumberComponent implements OnInit {
  
  @Input() numPlayer: number;
  maxPlayerIcon: number= 6;
  maxPlayers:number=30;


  @Output() changeNumPlayer= new EventEmitter<Number>();
   
  icone : number[] = [];
  
  constructor(private pickerController: PickerController) {
  }
  
  ngOnInit() {
    this.initIcone();
    
  }
  
  initIcone(){
    // 6 FACCE e 1 PLUS
    for(let index=0; index<=5; index++)
    {
      this.icone[index] = index+1;
    }
  }

  /**
   * Invia alla pagina il nuovo numero player
   * @param nPlayer Numero Player
   */
  onClickPlayer(nPlayer, event:any)
  {
    this.changeNumPlayer.emit(nPlayer);
  }

  /**
   * invia alla pagina la richiesta di aggiunta giocatori
   */
  onClickPlusPlayer()
  {
    let _this=this;
    //array di bottoni del picker (per ora vuoto)
    let pickerButtons:PickerButton[]=[
      {
        text: 'Conferma',
        handler: (nPlayers)=>{
        _this.changeNumPlayer.emit(nPlayers.column.value);
        }
      },
      {
        text: 'Annulla',
        role: 'cancel'
      }
    ];
    
    //Valori della colonna 
    let pickerValues: PickerColumnOption[]= [];
    for (let i=(this.maxPlayerIcon+1);i<this.maxPlayers;i++)
    {
      let pickerValue : PickerColumnOption ={
        text: String(i),
        value: i
      }
      pickerValues.push(pickerValue);
    }

    //Intestazione della colonna
    let pickerColumns: PickerColumn[]=[{
      name: 'column',
      options: pickerValues
    }]

    //caratteristiche del picker
    let pickerOptions: PickerOptions={
      columns: pickerColumns,
      buttons: pickerButtons,
      keyboardClose: true
    }

    this.pickerController
            .create(pickerOptions)
            .then(picker=>{
              picker.present()
            })



  }

  
  
}

export enum typeIcon {
  player=10,
  add=20
} 