import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Sport } from 'src/app/models/sport.model';
import { CategoriaEta } from 'src/app/models/categoriaeta.model';
import { Subscription } from 'rxjs';
import { FilterCorsi } from 'src/app/models/filtercorsi.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit, OnDestroy {

  listSport: Sport[];
  listCatEta: CategoriaEta[];
  listenSport: Subscription;
  listenCatEta: Subscription;
  myFilter: FilterCorsi;

  constructor(private startService: StartService) { 

    this.listenSport = this.startService.listSport.subscribe(listElements => {
      this.listSport = listElements;
    });

    this.listenCatEta = this.startService.listCategoriaEta.subscribe( listElements => {
      this.listCatEta = listElements;
    });

    this.myFilter = this.startService.filterCorsi;
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.listenSport) {
      this.listenSport.unsubscribe();
    }

    if (this.listenCatEta) {
      this.listenCatEta.unsubscribe();
    }
  }

  compareWithFnCatEta = (o1, o2) => {
    return o1 && o2 ? o1.ID === o2.ID : o1 === o2;
  };

  compareWithCatEta = this.compareWithFnCatEta;

}
