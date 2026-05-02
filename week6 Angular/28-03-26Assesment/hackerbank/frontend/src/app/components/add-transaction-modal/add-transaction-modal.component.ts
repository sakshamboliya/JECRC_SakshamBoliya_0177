import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateTransactionDto } from '../../models/transaction.model';

@Component({
  selector: 'app-add-transaction-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.css']
})
export class AddTransactionModalComponent {
  @Output() save  = new EventEmitter<CreateTransactionDto>();
  @Output() close = new EventEmitter<void>();

  form: CreateTransactionDto = {
    date: '', description: '', type: 0, amount: 0, balance: ''
  };

  onSubmit(): void {
    if (!this.form.date || !this.form.description || !this.form.balance) return;
    this.save.emit({ ...this.form });
  }
}