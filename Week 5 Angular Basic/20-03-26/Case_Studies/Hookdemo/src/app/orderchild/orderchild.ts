import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orderchild',
  standalone: true,
  imports: [CommonModule],   // 🔥 needed if using *ngFor
  templateUrl: './orderchild.html',
  styleUrls: ['./orderchild.css']
})
export class Orderchild implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() orderData!: { id: number; name: string; price: number; status: string };

  log: string[] = [];

  private logs(message: string) {
    this.log.push(`${new Date().toLocaleTimeString()} - ${message}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logs('ngOnChanges called');
  }

  ngOnInit() {
    this.logs('ngOnInit called');
  }

  ngDoCheck() {
    this.logs('ngDoCheck called');
  }

  ngAfterContentInit() {
    this.logs('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    this.logs('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    this.logs('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    this.logs('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    this.logs('ngOnDestroy called');
  }
}
