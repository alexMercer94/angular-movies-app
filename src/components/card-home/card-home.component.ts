import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {
  @Input() items: any[] = [];
  @Input('title') title;
  constructor(private router: Router) {}

  ngOnInit() {}

  movieDetail(item: any) {
    const movieId = item.id;
    /* if (item.type === 'artist') {
      movieId = item.id;
    } else {
      movieId = item.artists[0].id;
    } */
    //console.log(movieId);
    this.router.navigate(['/movie', movieId]);
  }
}
