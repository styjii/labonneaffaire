import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  listArticles = [
    {
      id: 1,
      articleTitle: "Vélo",
      articlePrice: 80,
      description: "Une super vélo tout terrain",
      urlImg: "images/vélo.png",
      textAltImg: "Une Jouet",
      dispo: false
    },
    {
      id: 2,
      articleTitle: "TV",
      articlePrice: 230,
      description: "Très bonne télévision grand écran",
      urlImg: "images/tv.png",
      textAltImg: "Une télévision",
      dispo: true
    },
    {
      id: 3,
      articleTitle: "Jouet",
      articlePrice: 15,
      description: "Neuf, jamais utilisé",
      urlImg: "images/jouet.png",
      textAltImg: "Un jouet",
      dispo: true
    }
  ]

  constructor() {}

  getArticle(id: number) {
    const article = this.listArticles.find(a => a.id === id)
    return article
  }
}
