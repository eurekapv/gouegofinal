import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  /* DA IMPLEMENTARE L'OGGETTO, LA SUBSCRIPTION ETC */
  listDocumenti = [];
  inRichiesta = true;

  constructor(private startService: StartService) { 
    this.inRichiesta = true;
  }

  ngOnInit() {
    this.inRichiesta = false;
  }

}
