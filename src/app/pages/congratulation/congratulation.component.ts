import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styles: []
})
export class CongratulationComponent implements OnInit {

  constructor(public router: Router
    ) { }

  ngOnInit() {
  }
  paso3(){
    this.router.navigate(['/validacion']);
}
}
