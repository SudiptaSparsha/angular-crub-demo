import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    products: Product[] = [
      {
          "id": "16",
          "name": "Pasta - Lasagna Noodle, Frozen",
          "description": "Organic background installation",
          "price": 16,
          "quantity": 3,
          "inventoryStatus": true,
          "image": "http://dummyimage.com/212x100.png/cc0000/ffffff"
      },
      {
          "id": "1",
          "name": "Creme De Menthe Green",
          "description": "Versatile regional migration",
          "price": 9,
          "quantity": 56,
          "inventoryStatus": true,
          "image": "http://dummyimage.com/238x100.png/dddddd/000000"
      },
      {
          "id": "268",
          "name": "Cheese - Cheddar, Medium",
          "description": "Profit-focused full-range budgetary management",
          "price": 45,
          "quantity": 81,
          "inventoryStatus": true,
          "image": "http://dummyimage.com/224x100.png/ff4444/ffffff"
      },
      {
          "id": "8768",
          "name": "Lamb - Leg, Bone In",
          "description": "Robust background complexity",
          "price": 26,
          "quantity": 35,
          "inventoryStatus": true,
          "image": "http://dummyimage.com/223x100.png/cc0000/ffffff"
      },
      {
          "id": "195",
          "name": "Placemat - Scallop, White",
          "description": "Business-focused next generation workforce",
          "price": 50,
          "quantity": 71,
          "inventoryStatus": true,
          "image": "http://dummyimage.com/165x100.png/5fa2dd/ffffff"
      },
      {
          "id": "6849",
          "name": "Seaweed Green Sheets",
          "description": "Sharable radical database",
          "price": 36,
          "quantity": 23,
          "inventoryStatus": true,
          "image": "http://dummyimage.com/215x100.png/cc0000/ffffff"
      },
      {
          "id": "886",
          "name": "Cleaner - Bleach",
          "description": "Upgradable optimizing groupware",
          "price": 6,
          "quantity": 14,
          "inventoryStatus": false,
          "image": "http://dummyimage.com/200x100.png/ff4444/ffffff"
      },
      {
          "id": "79081",
          "name": "Dip - Tapenade",
          "description": "Organic maximized instruction set",
          "price": 13,
          "quantity": 35,
          "inventoryStatus": true,
          "image": "http://dummyimage.com/188x100.png/5fa2dd/ffffff"
      },
      {
          "id": "1",
          "name": "Beans - Black Bean, Dry",
          "description": "Synchronised intermediate forecast",
          "price": 18,
          "quantity": 89,
          "inventoryStatus": false,
          "image": "http://dummyimage.com/194x100.png/ff4444/ffffff"
      },
      {
          "id": "145",
          "name": "Cheese - Feta",
          "description": "Organized transitional definition",
          "price": 14,
          "quantity": 88,
          "inventoryStatus": true,
          "image": "http://dummyimage.com/203x100.png/dddddd/000000"
      }
  ];

    constructor(private productService: ProductService) { }

    ngOnInit() {
       
    }
}
