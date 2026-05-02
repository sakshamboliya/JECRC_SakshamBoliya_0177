import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Transaction,
  TransactionQuery,
  CreateTransactionDto
} from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5001/api/transactions';

  getAll(query: TransactionQuery = {}): Observable<Transaction[]> {
    let params = new HttpParams();
    if (query.date)      params = params.set('date',      query.date);
    if (query.sortBy)    params = params.set('sortBy',    query.sortBy);
    if (query.sortOrder) params = params.set('sortOrder', query.sortOrder);
    return this.http.get<Transaction[]>(this.apiUrl, { params });
  }

  create(dto: CreateTransactionDto): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
