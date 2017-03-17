import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
addReview(name: HTMLInputElement, review: HTMLInputElement): boolean {
 console.log(`Adding review name: ${name.value} and review: ${review.value}`);
 return false;
 }

names: string[];
reviews: string[];
  constructor() { 
  	this.names= ["nishit", "ssdfs"];
  	this.reviews=[ "good restaurant","dfdaf"];
  }

  ngOnInit() {
  }

}
