import { Component } from '@angular/core';
import { TipService } from '../Tip.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  cost!: number;
  quality: number = 15;
  roundUP: boolean = false;

  constructor(private tipService: TipService, private router: Router) { }

  onSubmit(): void {
    const formData = {
    cost: this.cost,
    quality: this.quality,
    roundUP: this.roundUP
  };
    this.tipService.setTipData(formData);
    this.router.navigate(['/output']);
  }
}
