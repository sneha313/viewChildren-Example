import { Component, AfterViewInit, QueryList, OnInit, ViewChildren, ViewChild, ElementRef, Input, DoCheck } from '@angular/core';
import {HelloComponent} from './hello.component'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren (HelloComponent) hellos : QueryList<any>
  @ViewChild ('pViewChildRef', {static: false}) pViewChildRef: ElementRef
  names = ['Angular', 'Angular 2', 'Angular 3', 'Angular 4', 'Angular 5', 'Angular 6', 'Angular 7'];
  constructor(eleRef: ElementRef){
  }
  ngOnInit(){
  }
  ngAfterViewInit(){
    console.log(this.pViewChildRef.nativeElement.innerHTML);
    if(this.pViewChildRef.nativeElement.classList.contains('last-child')){
       console.log("last class is here");
    }
    console.log("this.hellos.toArray", this.hellos.toArray());
    this.hellos.forEach(hello => {
      console.log("hello component ", hello.name)
    });
  }
  myOutput(event: string){
    console.log("angular latest version is ", event);
  }
}
