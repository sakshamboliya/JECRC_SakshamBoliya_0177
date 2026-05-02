import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackForm } from './feedbackform/feedbackform';

@Component({
  selector: 'app-root',
  imports: [FeedbackForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('form-demo');
}