import { Injectable } from '@angular/core';

export enum MapTile {
  Free = '_',
  Blocked = '∗',
  Player = 'X',
  Goal = 'R',
}

export interface Map {
  size: MapSize;
  ratio: number;
  time: number;
  values: MapTile[][];
}

export interface MapSize {
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  generateMap(size: MapSize, ratio: number = 0.5): Map {
    const values = [];

    for (let y = 0; y < size.height; y++) {
      for (let x = 0; x < size.width; x++) {
        values[y] = new Array(size);
      }
    }

    for (let y = 0; y < size.height; y++) {
      for (let x = 0; x < size.width; x++) {
        const free = Math.random() > ratio;
        values[y][x] = free ? MapTile.Free : MapTile.Blocked;
      }
    }

    const playerX = Math.floor(Math.random() * size.width);
    const playerY = Math.floor(Math.random() * size.height);
    values[playerY][playerX] = MapTile.Player;

    let goalX = Math.floor(Math.random() * size.width);
    let goalY = Math.floor(Math.random() * size.height);

    while (goalX === playerX && goalY === playerY) {
      goalX = Math.floor(Math.random() * size.width);
      goalY = Math.floor(Math.random() * size.height);
    }
    values[goalY][goalX] = MapTile.Goal;

    return {
      size,
      values,
      ratio,
      time: Date.now(),
    };
  }
}
