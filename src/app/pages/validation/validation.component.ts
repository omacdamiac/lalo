import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styles: []
})
export class ValidationComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  paso4(){
    this.router.navigate(['/info']);
}
}
