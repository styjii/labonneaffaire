import { Component, OnInit } from '@angular/core';
import { Data } from '../../data';
import { Article } from '../article/article';

interface ListArticlesInterface {
  id: number
  articleTitle: string
  articlePrice: number
  description: string
  urlImg: string
  textAltImg: string
  dispo: boolean
}

@Component({
  selector: 'app-list-articles',
  imports: [Article],
  templateUrl: './list-articles.html',
  styleUrl: './list-articles.css',
  providers: [Data],
})
export class ListArticles implements OnInit {
  message: string = ""
  listArticles: ListArticlesInterface[] | undefined

  constructor(private data: Data) { }

  ngOnInit(): void {
    this.listArticles = this.data.listArticles
  }


  onDisplay(arg: string) {
    if (arg === 'hide') {
      this.message = '';
    } else {
      this.message = "Merci d'avoir voté pour l'article : " + arg;
    }
  }
}
