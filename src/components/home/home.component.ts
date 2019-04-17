import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moviesInTheaters: any[] = [];
  popularMovies: any[] = [];
  // bestCifiMovies: any[] = [];
  popularKidsMovies: any[] = [];

  loading: boolean;

  constructor(private movieService: MovieService) {
    this.getData();
  }

  ngOnInit() {}

  getData() {
    this.loading = true;
    this.movieService.moviesInTheaters().subscribe((data: any) => {
      /* console.log(data); */
      this.moviesInTheaters = data;
    });

    this.movieService.getPopulares().subscribe((data: any) => {
      this.popularMovies = data;
    });

    /* this.movieService.getBestCIFIMovies().subscribe((data: any) => (this.bestCifiMovies = data)); */
    this.movieService.getPopularKidsMovies().subscribe((data: any) => {
      this.popularKidsMovies = data;
      this.loading = false;
    });
  }
}
