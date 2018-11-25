import { Pipe, PipeTransform } from '@angular/core';
import { Map } from './map.service';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform(map: Map): any {
    if (!map || !map.values) {
      return null;
    }

    return map.values.reduce((acc: string[], row) => {
      acc.push(`<div class='map__row'>${row.join(' ')}</div>`);
      return acc;
    }, []).join('');
  }

}
