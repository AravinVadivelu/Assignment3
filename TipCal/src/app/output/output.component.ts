import { Component } from '@angular/core';
import { TipService } from '../Tip.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  tipData: any;
  tip!: number;
  total!: number;


  constructor(private tipService: TipService, private router: Router) { }
  
  ngOnInit() {
    this.tipData = this.tipService.getTipData();
    if (!this.tipData) {
      this.router.navigate(['/input']);
      return;
    }

    const cost = parseFloat(this.tipData.cost);
    const quality = parseFloat(this.tipData.quality);
    const roundUp = this.tipData.roundUp;

    this.tip = this.tipService.calculateTip(cost, quality, roundUp);
    this.total = this.tipService.calculateTotal(cost, this.tip);
  }
  

}
