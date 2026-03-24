import { Component } from '@angular/core';
import { Orderparent } from './orderparent/orderparent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Orderparent],
  template: `<app-orderparent></app-orderparent>`
})
export class App {}
