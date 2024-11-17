import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
ngOnInit(): void {
  gsap.to('.hero h1',{
    transform:'rotate(0deg)',
    scale:1.1,
    ease:'back.in',
    opacity:1,
    duration:1,
    delay:.3
  })
gsap.to('.text',{
scrollTrigger:{
  trigger:'.text',
  start:'top bottom',
  end:'bottom top',
  scrub:true
},
y:-600,
})
gsap.to('.text1',{
  scrollTrigger:{
    trigger:'.text1',
    start:'top bottom',
    end:'bottom top',
    scrub:true
  },
  y:-700,
  })
  gsap.to('.img img',{
    scrollTrigger:{
      trigger:'img',
      start: 'top top',
      end: 'bottom top',
      pin:true
    }
  })
  gsap.to('.slide h3',{
    transform:'translateX(-130%)',
    scrollTrigger:{
      trigger:'.slide',
      scroller:'body',
      start:'top 10%',
      end:'top -100%',
      scrub:2,
      pin:true
    }
  })
}
}
