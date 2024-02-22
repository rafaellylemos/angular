import { Component, 
    OnInit, 
    DoCheck, 
    AfterContentChecked, 
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
 } from '@angular/core';

@Component({
  selector: 'app-check-simple',
  standalone: true,
  imports: [],
  templateUrl: './check-simple.component.html',
  styleUrl: './check-simple.component.css'
})
export class CheckSimpleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  constructor() {}
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
}
