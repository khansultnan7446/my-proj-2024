import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '';

  appendNumber(number: string) {
    this.display += number;
  }

  appendOperator(operator: string) {
    const lastChar = this.display[this.display.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
      this.display = this.display.slice(0, -1) + operator;
    } else {
      this.display += operator;
    }
  }

  clear() {
    this.display = '';
  }

  deleteLast() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }
}


