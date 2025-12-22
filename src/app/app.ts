import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit, OnDestroy {
  protected readonly title = signal('labonneaffaire');
  seconds: string = '';
  countSubscription: Subscription | undefined

  constructor() {}

  ngOnInit(): void {
    const compteur = interval(1000).pipe(
      filter((value: number) => !(value % 2)),
      map((value: number) => !(value % 2) ? 
        `${value} est pair` : 
        `${value} est impair`
      ) 
    );

    this.countSubscription = compteur.subscribe({
      next: (v: string) => this.seconds = v,
      error: (e) =>  console.error('Erreur : ' + e),
      complete: () => console.info('Complete')  
    });
  }

  ngOnDestroy(): void {
    this.countSubscription?.unsubscribe();
  }
}
