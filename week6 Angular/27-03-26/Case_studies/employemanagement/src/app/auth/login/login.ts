import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [CommonModule],

  template: `
    <h2>Employee List</h2>
    <ul>
      <li *ngFor="let emp of employees">
        {{ emp.name }} - {{ emp.role }}
      </li>
    </ul>
  `,
  styleUrls: ['./employeelist.css']
})

