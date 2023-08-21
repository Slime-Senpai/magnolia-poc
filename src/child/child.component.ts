import { Component, OnInit } from '@angular/core';
import { MagnoliaDataSource } from '../magnolia-data-source';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
})
export class ChildComponent implements OnInit {
  constructor(private dataSource: MagnoliaDataSource) {
    console.log(dataSource);
    this.value = dataSource.getData();
  }

  value = '';

  ngOnInit() {}
}
