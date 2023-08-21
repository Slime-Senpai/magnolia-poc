import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MagnoliaDataSource } from '../magnolia-data-source';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
  standalone: true,
  imports: [ChildComponent],
  providers: [{ provide: MagnoliaDataSource, useClass: Parent2Component }],
})
export class Parent2Component implements OnInit, MagnoliaDataSource {
  constructor() {}
  getData(): string {
    return 'tata';
  }

  ngOnInit() {}
}
