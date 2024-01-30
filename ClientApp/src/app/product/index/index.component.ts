import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../product.interface';

@Component({
  selector: 'app-index',
//  standalone: true,
//  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  product: IProduct[]=[];
constructor(public productService: ProductService){}
ngOnInit():void{
  this.productService.getAll().subscribe(sub => {
  })
}
}
