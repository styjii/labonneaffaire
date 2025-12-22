import { NgStyle, NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  imports: [FormsModule, NgStyle, NgClass, UpperCasePipe, RouterLink],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  totalNbrLike: number = 0;
  comment: string = '';
  like: boolean = true;

  @Output() info = new EventEmitter<string>();

  @Input() articleTitle!: string;
  @Input() articlePrice!: number;
  @Input() urlImg!: string;
  @Input() textAltImg!: string;
  @Input() description!: string;
  @Input() dispo!: boolean;
  @Input() idArticle!: number;

  onLike(): void {
    if (this.like === true) {
      this.totalNbrLike++;
      this.like = false;
      this.info.emit(this.articleTitle);
    } else {
      this.totalNbrLike--;
      this.like = true;
      this.info.emit('hide');
    }
  }

  getColor(): string {
    if (this.dispo === true) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
