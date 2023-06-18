import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  colors: string[] = ['#66b447', '#ffc324', '#6f2da8']; // Array of colors
  currentIndex: number = 0;
  texts: string[] = ['APPLE', 'MANGO', 'GRAPE'];
  currentText: string = this.texts[this.currentIndex];

  prevColor(): void {
    this.currentIndex = (this.currentIndex - 1 + this.colors.length) % this.colors.length;
    this.updateBackgroundColor();
    this.currentText = this.texts[this.currentIndex];
  }

  nextColor(): void {
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    this.updateBackgroundColor();
    this.currentText = this.texts[this.currentIndex];
  }

  updateBackgroundColor(): void {
    document.body.style.backgroundColor = this.colors[this.currentIndex];
  }
}
