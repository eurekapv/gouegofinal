import { Component, OnInit } from '@angular/core';
import { NewsEvento } from 'src/app/models/newsevento.model';

import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.page.html',
  styleUrls: ['./newsdetail.page.scss'],
})
export class NewsdetailPage implements OnInit {

  myNews: NewsEvento = new NewsEvento();
  
  loading: boolean;

  constructor(private startService: StartService,
              private actRouter: ActivatedRoute,
              private router: Router) { 
    
  }

  ngOnInit() {

    let idNews = '';

    this.actRouter.paramMap.subscribe( param => {
      
      if (param.has('newsId')) 
      {
        idNews = param.get('newsId');

        //Richiedo la News che mi serve
        this.myNews = this.startService.requestNewsByID(idNews);
        
      }
      else {
        this.router.navigate(['/']);
      }
    });
  }

  /**
   * Apre il link della News
   */
  onClickReadNews() {

  }

}
