import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipService {
  private tipData: any;

  setTipData(data: any) {
    this.tipData = data;
  }

  getTipData() {
    return this.tipData;
  }

  calculateTip(cost: number, quality: number, roundUp: boolean): number {
    let tip = cost * (quality / 100);
    if (roundUp) {
      tip = Math.ceil(tip);
    } else {
      tip = Math.round(tip * 100) / 100;
    }
    return tip;
  }

  calculateTotal(cost: number, tip: number): number {
    return cost + tip;
  }
}
