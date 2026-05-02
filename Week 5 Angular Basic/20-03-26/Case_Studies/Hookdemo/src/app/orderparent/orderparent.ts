import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orderchild } from '../orderchild/orderchild';

@Component({
  selector: 'app-orderparent',
  standalone: true,   // 🔥 REQUIRED
  imports: [CommonModule, Orderchild],
  templateUrl: './orderparent.html',
  styleUrls: ['./orderparent.css']
})
export class Orderparent {

  order = {
    id: 1,
    name: 'Laptop',
    price: 1000,
    status: 'Delivered'
  };

  updateOrder() {
    this.order = {
      ...this.order,
      status: this.order.status === 'Delivered' ? 'Pending' : 'Delivered'
    };
  }

  destroyChild = true;

  toggleChild() {
    this.destroyChild = !this.destroyChild;
  }
}





























































































































































































































































