import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';
  printVal: any;

  ngOnInit() {
    console.time();
    this.printVal = this.memo(this.calculate);
    console.log(this.printVal(5));
    console.timeEnd();


    console.time();
    console.log(this.printVal(6));
    console.timeEnd();
  }

calculate = (num: any) => {
  return num * 2;
} 
 
memo = (func: any) => {
 let cache: any = {};
 return (...args: any) => {
   let numVal = args[0];
   if(numVal in cache) {
     console.log('cache');
      return cache[numVal];
   } else {
    console.log('not in cache');
     cache[numVal] = this.calculate(numVal);
     return cache[numVal];
   }
 }
}

}

bootstrapApplication(App);
