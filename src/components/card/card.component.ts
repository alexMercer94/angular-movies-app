import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() searching?: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  movieDetail(item: any) {
    const movieId = item.id;
    /* if (item.type === 'artist') {
      movieId = item.id;
    } else {
      movieId = item.artists[0].id;
    } */
    // console.log(movieId);
    this.router.navigate(['/movie', movieId, 'search', this.searching]);
  }
}
