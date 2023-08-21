import { Component, OnInit } from '@angular/core';
import { MagnoliaDataSource } from '../magnolia-data-source';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone: true,
  imports: [ChildComponent],
  providers: [{ provide: MagnoliaDataSource, useClass: ParentComponent }],
})
export class ParentComponent implements OnInit, MagnoliaDataSource {
  constructor() {}
  getData(): string {
    return 'toto';
  }

  ngOnInit() {}
}
