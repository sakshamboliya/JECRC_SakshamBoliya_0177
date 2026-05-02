import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent {

  user: any = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    delivery: '',
    city: '',
    payment: ''
  };

  placeOrder() {
  const orderData = {
    userDetails: this.user,
    orderTime: new Date(),
  };

  alert(JSON.stringify(orderData, null, 2));
}
}