import { Component } from '@angular/core';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TransactionTableComponent],
  template: `<app-transaction-table />`
})
export class AppComponent {}
