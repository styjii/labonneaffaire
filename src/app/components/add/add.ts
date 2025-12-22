import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule, NgIf],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  titleToAdd: string = '';
  priceToAdd: number | null = null;

  constructor() { }

  onSubmit(form: any): void {
    const newTitle = this.titleToAdd;
    const newPrice = this.priceToAdd;

    console.log("new title : " + newTitle);
    console.log("new price : " + newPrice);
  }
}
