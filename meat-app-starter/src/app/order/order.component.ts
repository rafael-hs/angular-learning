import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-datail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartao refeição', value: 'REF'},
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }


  cartItems() : CartItem[]{
    return this.orderService.cartItems()
  }

  increaseItems(item: CartItem){
    return this.orderService.increaseQty(item)
  }

  decreaseItems(item: CartItem){
    return this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }
}
