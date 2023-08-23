import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/models/IProducto';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos : IProducto[] = [
    {
      id: 1,
      nombre: 'Fideos',
      sku: 3001,
      brand: 'Carozzi',
      producto_enabled: true
    },
    {
      id: 2,
      nombre: 'Atun',
      sku: 3002,
      brand: 'Carozzi',
      producto_enabled: true
    },
    {
      id: 3,
      nombre: 'leche',
      sku: 3003,
      brand:  'soprole',
      producto_enabled: true
    },
    {
      id: 4,
      nombre: 'aceite',
      sku: 3004,
      brand: 'lider',
      producto_enabled: true
    },
    {
      id: 5,
      nombre: 'wisky',
      sku: 3005,
      brand: 'johnny walker',
      producto_enabled: true
    },
    {
      id: 6,
      nombre: 'pelota',
      sku: 3006,
      brand: 'nike',
      producto_enabled: true
    },
    {
      id: 7,
      nombre: 'polera',
      sku: 3007,
      brand: 'adidas',
      producto_enabled: true
    },
    {
      id: 8,
      nombre: 'Huevos',
      sku: 3008,
      brand: 'avicol',
      producto_enabled: true
    },
    {
      id: 9,
      nombre: 'Yogurt',
      sku: 3009,
      brand: 'soprole ',
      producto_enabled: true
    },
    {
      id: 10,
      nombre: 'Chamito',
      sku: 3010,
      brand: 'soprole',
      producto_enabled: true
    },
  ] 
  constructor() { }

  ngOnInit() {
  }

}
