import { Component, OnInit } from '@angular/core';
import { MapService, Map, MapTile } from './map.service';
import { MapPipe } from './map.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mapSize = {
    width: 4,
    height: 4,
  };
  freeToBlockedRatio = 0.5;
  maps: Map[] = [];
  selectedMap: Map = null;

  constructor(
    private mapsService: MapService,
    private mapPipe: MapPipe,
  ) { }

  ngOnInit() {
    this.mapGenClicked();
  }

  mapGenClicked(): void {
    this.selectedMap = this.mapsService.generateMap({...this.mapSize}, this.freeToBlockedRatio);
    this.maps.push(this.selectedMap);
  }

  selectMap(map: Map): void {
    this.selectedMap = map;
  }

  copyToClipboard() {
    const mapString = this.selectedMap.values
      .reduce((acc: String[], mapTiles: MapTile[]) => acc.push(mapTiles.join(' ')) && acc, [])
      .join('\n');

    if (navigator && 'clipboard' in navigator) {
      (navigator as any).clipboard.writeText(mapString);
    }
  }
}
