import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EApi } from '../enums/api.enum';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'ae154bce41b39a3b9a949f82bef12b3d';

  movies: any[] = [];

  constructor(private http: HttpClient) {}
  /**
   * Built an url to call the service
   * @param query String in order to built an url for service
   * @param date Is in case in order to built an url using dates
   */
  getQuery(query: string, date = true): Observable<object> {
    let url = '';
    if (!date) {
      url = `${EApi.urlMovieDB}${query}&api_key=${this.apiKey}&language=es`;
    } else {
      url = `${EApi.urlMovieDB}${query}?primary_release_date.gte=${this.subtractNumberOfMonths(
        1
      )}&primary_release_date.lte=${this.dateAsYYYYMMDD(new Date())}&api_key=${this.apiKey}&language=es`;
    }
    /* console.log(url); */
    return this.http.get(url);
  }

  getPopulares(): Observable<any> {
    return this.getQuery(EApi.getPopularMovies, false).pipe(map((data: any) => data[`results`].slice(0, 6)));
  }

  moviesInTheaters(): Observable<any> {
    return this.getQuery(EApi.getMoviesInTheaters, true).pipe(map((data: any) => data[`results`].slice(0, 6)));
  }

  getBestCIFIMovies(): Observable<any> {
    return this.getQuery(EApi.bestCIFIMovies, false).pipe(map((data: any) => data[`results`].slice(0, 6)));
  }

  searchMovie(text: string): Observable<any> {
    const url = `${EApi.urlMovieDB}${EApi.searchMovie}=${text}&sort_by=popularity.desc&api_key=${
      this.apiKey
    }&language=es`;

    return this.http.get(url).pipe(
      map((data: any) => {
        this.movies = data[`results`];
      })
    );
  }

  getMovie(id: string): Observable<any> {
    const url = `${EApi.urlMovieDB}${EApi.getMovie}${id}?api_key=${this.apiKey}&language=es`;
    /* console.log(url); */
    return this.http.get(url).pipe(map((data: any) => data));
  }

  getPopularKidsMovies() {
    return this.getQuery(EApi.getPopularKidsMovies).pipe(map((data: any) => data[`results`].slice(0, 6)));
  }

  subtractNumberOfMonths(numMonths: number): string {
    const result = new Date(this.dateAsYYYYMMDD(new Date()));
    result.setMonth(result.getMonth() - numMonths);
    /* console.log(this.dateAsYYYYMMDD(result)); */

    return this.dateAsYYYYMMDD(result);
  }

  dateAsYYYYMMDD(date): string {
    const builtDate =
      date.getFullYear() + '-' + this.leftpad(date.getMonth() + 1, 2) + '-' + this.leftpad(date.getDate(), 2);
    /* console.log(builtDate); */
    return builtDate;
  }

  leftpad(val, resultLength = 2, leftpadChar = '0'): string {
    return (String(leftpadChar).repeat(resultLength) + String(val)).slice(String(val).length);
  }
}
