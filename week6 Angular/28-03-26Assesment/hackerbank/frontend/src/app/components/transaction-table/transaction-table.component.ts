import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Transaction, CreateTransactionDto } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';
import { AddTransactionModalComponent } from '../add-transaction-modal/add-transaction-modal.component';

@Component({
  selector: 'app-transaction-table',
  standalone: true,
  imports: [CommonModule, FormsModule, AddTransactionModalComponent],
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {
  private readonly svc = inject(TransactionService);

  transactions: Transaction[] = [];
  loading = false;
  error   = '';

  filterDate    = '';
  sortedByAmount = false;
  showModal     = false;

  ngOnInit(): void {
    this.load();
  }

  load(date?: string, sortBy?: string): void {
    this.loading = true;
    this.error   = '';
    this.svc.getAll({
      date:      date    || undefined,
      sortBy:    sortBy  || undefined,
      sortOrder: sortBy  ? 'asc' : undefined
    }).subscribe({
      next:  data  => { this.transactions = data; this.loading = false; },
      error: ()    => {
        this.error   = 'Failed to load transactions. Is the API running?';
        this.loading = false;
      }
    });
  }

  onFilter(): void {
    if (!this.filterDate) return;
    this.sortedByAmount = false;
    this.load(this.filterDate);
  }

  onSortByAmount(): void {
    this.sortedByAmount = true;
    this.load(this.filterDate || undefined, 'amount');
  }

  onAdd(dto: CreateTransactionDto): void {
    this.svc.create(dto).subscribe({
      next: () => {
        this.showModal = false;
        this.load(
          this.filterDate    || undefined,
          this.sortedByAmount ? 'amount' : undefined
        );
      },
      error: () => { this.error = 'Failed to create transaction.'; }
    });
  }

  onDelete(id: number): void {
    if (!confirm('Delete this transaction?')) return;
    this.svc.delete(id).subscribe({
      next:  () => this.load(
        this.filterDate    || undefined,
        this.sortedByAmount ? 'amount' : undefined
      ),
      error: () => { this.error = 'Failed to delete transaction.'; }
    });
  }

  resetFilter(): void {
    this.filterDate     = '';
    this.sortedByAmount = false;
    this.load();
  }
}