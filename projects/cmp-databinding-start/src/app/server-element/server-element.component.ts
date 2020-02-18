import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  //Javascript object {}
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef
  constructor() {
    console.log('constructor called!');

  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('TextContent: ' + this.header.nativeElement.textContent)
    console.log('TextContent of paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes);
  }
  ngDoCheck(){
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
    console.log('TextContent of paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked called!')
  }

  ngAfterViewChecked(){
    console.log('AfterViewChecked called!')
  }

  ngAfterViewInit(){
    console.log('AfterViewInit called!')
    console.log('TextContent: ' + this.header.nativeElement.textContent)
  }

  ngOnDestroy(){
    console.log('OnDestroy called!')
  }

}
