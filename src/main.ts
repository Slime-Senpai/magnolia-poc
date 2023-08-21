import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ParentComponent, Parent2Component],
  template: `
    <app-parent></app-parent>
    <app-parent2></app-parent2>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
