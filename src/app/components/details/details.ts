import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../data';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  id: number = 0
  title?: string
  price?: number
  description?: string
  urlImg?: string
  textAltImg?: string

  constructor(private route: ActivatedRoute, private data: Data) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params["id"])

    this.id = id
    this.title = this.data.getArticle(id)?.articleTitle
    this.price = this.data.getArticle(id)?.articlePrice
    this.description = this.data.getArticle(id)?.description
    this.urlImg = this.data.getArticle(id)?.urlImg
    this.textAltImg = this.data.getArticle(id)?.textAltImg
  }
}
