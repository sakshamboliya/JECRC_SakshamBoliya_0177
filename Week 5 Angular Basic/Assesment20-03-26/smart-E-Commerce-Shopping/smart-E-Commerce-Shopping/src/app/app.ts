import { Component } from '@angular/core';
import { ProductComponent } from './product/product';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductComponent, CartComponent, CheckoutComponent],
  templateUrl: './app.html'
})
export class App {

  products = [
    { id: 1, name: 'Laptop', price: 50000, category: 'Electronics', rating: 4 },
    { id: 2, name: 'Shoes', price: 2000, category: 'Fashion', rating: 5 },
    { id: 3, name: 'Phone', price: 30000, category: 'Electronics', rating: 4 }
  ];

  cart: any[] = [];

  addToCart(product: any) {
    const existing = this.cart.find(p => p.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeItem(id: number) {
    this.cart = this.cart.filter(p => p.id !== id);
  }

  updateQuantity(item: any, change: number) {
    item.quantity += change;
    if (item.quantity <= 0) this.removeItem(item.id);
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}