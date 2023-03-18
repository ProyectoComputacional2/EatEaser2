import { Component,OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
    }
    ngAfterContentInit(){
      const scene=document.getElementById('Parallax')!;
      const parallaxInstance=new Parallax(scene,{relativeInput:true, hoverOnly:true});
    }
}
