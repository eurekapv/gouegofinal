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
  utente:Utente=new Utente;
  account: Account=new Account;

  accountListen:Subscription;
  utenteListen: Subscription;

  constructor(
      private startService : StartService
    ) {

      this.startService.account.subscribe(data=>{
        this.account=data;
        //console.log(data);
        if (this.account.IDREF) {
          console.log("bp");
          this.startService.requestUtente(this.account.IDREF);
          this.startService.utente.subscribe(data=>{
            this.utente=data;
          })          
        }
      })




   }

  ngOnInit() {
    this.createForm();
  }

  createForm()
  {
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
      cf:new FormControl(this.utente.CODICEFISCALE, {
        updateOn:'change',
        validators: []
      }),
      cell:new FormControl(null, {
        updateOn:'change',
        validators: []
      }),

    })
  }

}
