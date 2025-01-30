import { Component, inject, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  public transactions: Transaction[] = [];
  private readonly transactionService: TransactionService =
    inject(TransactionService);

  public ngOnInit(): void {
    this.transactionService.listTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }
}
