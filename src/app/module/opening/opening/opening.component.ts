import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss'],
})
export class OpeningComponent implements OnInit {
  constructor(private router: Router) {}

  toLogin() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {}
}
