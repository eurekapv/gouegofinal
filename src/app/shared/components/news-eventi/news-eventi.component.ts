import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsEventi } from 'src/app/models/newseventi.model';


@Component({
  selector: 'app-news-eventi',
  templateUrl: './news-eventi.component.html',
  styleUrls: ['./news-eventi.component.scss'],
})
export class NewsEventiComponent implements OnInit {

  @Input() myNews = new NewsEventi();
  @Output() clickNews = new EventEmitter<NewsEventi>();

  constructor() { }

  ngOnInit() {}


  /**
   * Emetto l'evento di click
   */
  onClickNews() {
    this.clickNews.emit(this.myNews);
  }
}
