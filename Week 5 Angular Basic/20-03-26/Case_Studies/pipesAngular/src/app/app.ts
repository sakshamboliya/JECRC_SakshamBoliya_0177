import { Component } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipe, CommonModule, KeyValuePipe, DatePipe } from '@angular/common';
import { PipesPipe } from './pipes-pipe';   // ✅ import your pipe

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    DatePipe,
    KeyValuePipe,
    PipesPipe   // 🔥 THIS WAS MISSING
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  today = new Date();

  data$ = of([
    { id: 1, name: 'Laptop', price: 1000, status: 'Delivered' },
    { id: 2, name: 'Mobile', price: 500, status: 'Pending' }
  ]);

  product = {
    name: 'Laptop',
    price: 1000
  };
}
