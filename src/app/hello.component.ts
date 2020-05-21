import { Component, Input, QueryList, ViewChildren, AfterViewInit, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <button (click) ="outputEvent(latestVersion)" *ngIf="showHideBtn">click me</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit  {
  @Input() name: string;
  showHideBtn : boolean;
  // @Input() myInput: string;
  @Output() myOutput:EventEmitter<any> = new EventEmitter<any>();
  latestVersion = "Angular 9";
  outputEvent(msg: string){
    console.log("message from parent component ",msg);
    this.myOutput.emit(msg);
  }
  ngOnInit(){
    this.showHideBtn = this.name === 'Angular 8' ? true : false;
  }
}