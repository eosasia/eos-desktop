import { Injectable } from '@angular/core';
import {WindowApp} from '../types/WindowApp';
import {WindowAppInterface} from '../types/WindowAppInterface';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {

  public openWindows: WindowApp[] = [];

  constructor() {}

  addWindow(window: WindowAppInterface): void {
    const newWindow = new WindowApp(window);
    this.openWindows.push(newWindow);
  }

  removeWindow(index: number): void {
    this.openWindows.splice(index, 1);
  }
}
