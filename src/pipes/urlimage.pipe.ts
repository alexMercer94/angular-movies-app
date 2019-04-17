import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlimage'
})
export class UrlimagePipe implements PipeTransform {
  transform(image: any, poster?: false): string {
    const url = 'http://image.tmdb.org/t/p/w500';

    /*     if (!image) {
      return 'assets/img/noimage.png';
    } */

    if (!poster) {
      if (image.poster_path) {
        return url + image.poster_path;
      } else {
        return 'assets/img/noimage.png';
      }
    } else {
      if (image.backdrop_path) {
        return url + image.backdrop_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }
  }
}
