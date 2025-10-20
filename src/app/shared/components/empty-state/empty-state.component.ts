import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent implements OnInit {

  @Input() icon: string = 'alert-circle-outline';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() type: 'info' | 'warning' | 'error' = 'info';
  
  constructor() { }

  ngOnInit() {}

  get iconColor(): string {
    switch(this.type) {
      case 'warning': return 'warning';
      case 'error': return 'danger';
      default: return 'medium';
    }
  }
}