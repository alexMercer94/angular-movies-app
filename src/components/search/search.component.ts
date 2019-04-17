import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/providers/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies: any[] = [];
  searchText: string;
  loading: boolean;

  constructor(public movieService: MovieService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      if (params[`text`]) {
        this.searchText = params[`text`];
        this.search();
      }
    });
  }

  ngOnInit() {}

  search() {
    console.log(this.searchText);
    if (this.searchText.length === 0) {
      return;
    } else {
      this.loading = true;
      setTimeout(() => {
        this.movieService.searchMovie(this.searchText).subscribe((data: any) => {
          /* console.log(data);
          this.movies = data; */
          this.loading = false;
        });
      }, 800);
    }
  }
}
