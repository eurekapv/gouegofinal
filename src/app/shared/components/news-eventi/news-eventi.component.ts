import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsEvento } from 'src/app/models/evento/newsevento.model';


@Component({
  selector: 'app-news-eventi',
  templateUrl: './news-eventi.component.html',
  styleUrls: ['./news-eventi.component.scss'],
})
export class NewsEventiComponent implements OnInit {

  @Input() myNews = new NewsEvento();
  @Output() clickNews = new EventEmitter<NewsEvento>();

  constructor() { }

  ngOnInit() {}


  /**
   * Emetto l'evento di click
   */
  onClickNews() {
    this.clickNews.emit(this.myNews);
  }
}
