import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;
  loading: boolean;
  backTo = '';
  searching = '';

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      if (params[`searching`]) {
        this.searching = params[`searching`];
      }

      console.log(params);
      this.backTo = params[`page`];
      this.getMovie(params[`id`]);
    });
  }

  ngOnInit() {}

  getMovie(id: string) {
    this.loading = true;
    this.movieService.getMovie(id).subscribe((movie: any) => {
      console.log(movie);
      this.movie = movie;
      this.loading = false;
    });
  }
}
