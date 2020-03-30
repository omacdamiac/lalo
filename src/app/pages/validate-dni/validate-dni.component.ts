import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-validate-dni',
  templateUrl: './validate-dni.component.html',
  styles: []
})
export class ValidateDniComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
  paso2(){
    this.router.navigate(['/felicitaciones']);
  }

}
