import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit(){
    console.log('hola mundo');
    
    let numero = 1;

    numero = numero + 12;

    debugger;

    numero = numero - 1;

    numero = 0;

    console.log(numero);
    

  }

}
