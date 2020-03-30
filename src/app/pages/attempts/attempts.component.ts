import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styles: []
})
export class AttemptsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  aInicio(){
    this.router.navigate(['/dni']);
  }
}
