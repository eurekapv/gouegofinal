import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Utente } from 'src/app/models/utente.model';
import { ValueList, Sesso } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/account.model';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {

  form: FormGroup; 


  utente:Utente=new Utente();
  utenteListen: Subscription;

  listSesso: ValueList[]=[];

  constructor(
      private startService : StartService
    ) {

      this.startService.utente.subscribe(data=>{
        this.utente =data;        
      })


    this.listSesso=ValueList.getArray(Sesso);
      

   }

  ngOnInit() {
    this.createForm();
  }

  createForm()
  {
    console.log(this.utente.NOME);
    this.form=new FormGroup({
      nome:new FormControl(this.utente.NOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      cognome:new FormControl(this.utente.COGNOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      sesso:new FormControl(ValueList.decode(Sesso, this.utente.SESSO), {
        updateOn:'change',
        validators: []
      }),
      nascita:new FormControl(this.utente.NATOIL, {
        updateOn:'change',
        validators: []
      }),
      provNascita:new FormControl(null, {
        updateOn:'change',
        validators: []
      }),
      comNascita:new FormControl(null, {
        updateOn:'change',
        validators: []
      }),
      statoNascita:new FormControl(null, {
        updateOn:'change',
        validators: []
      }),
      capNascita:new FormControl(null, {
        updateOn:'change',
        validators: []
      }),
      provResidenza:new FormControl(this.utente.PROVINCIA, {
        updateOn:'change',
        validators: []
      }),
      comResidenza:new FormControl(this.utente.COMUNE, {
        updateOn:'change',
        validators: []
      }),
      indResidenza:new FormControl(this.utente.INDIRIZZO, {
        updateOn:'change',
        validators: []
      }),
      capResidenza:new FormControl(this.utente.CAP, {
        updateOn:'change',
        validators: []
      }),
      statoResidenza:new FormControl(this.utente.ISOSTATO, {
        updateOn:'change',
        validators: []
      }),
      cf:new FormControl(this.utente.CODICEFISCALE, {
        updateOn:'change',
        validators: []
      }),
      cell:new FormControl({value: this.utente.MOBILENUMBER, disabled: true}, {
        updateOn:'change',
        validators: []
      }),
      email:new FormControl({value: this.utente.EMAIL, disabled: true}, {
        updateOn:'change',
        validators: []
      }),
    })
  }

  onSubmit()
  {
    if (this.form.valid)
    {
      this.utente.NOME=this.form.value.nome;
      this.utente.COGNOME=this.form.value.cognome;
      this.utente.SESSO=this.form.value.sesso;
      this.utente.NATOIL=this.form.value.nascita;
      //this.utente.NATOPROV=this.form.value.provNascita;
      this.utente.NATOA=this.form.value.comNascita;
      this.utente.PROVINCIA=this.form.value.provResidenza;
      this.utente.COMUNE=this.form.value.comResidenza;
      this.utente.INDIRIZZO=this.form.value.indResidenza;
      this.utente.CAP=this.form.value.capResidenza;
      this.utente.CODICEFISCALE=this.form.value.cf;
      this.utente.MOBILENUMBER=this.form.value.cell;
      console.log(this.utente);
      //richiesta di aggiornamento al server
    }
  }

}
