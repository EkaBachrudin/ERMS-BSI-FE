import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  data: any;
  drawer: any;
  test: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.data;
  }

  ngOnInit(): void {}
}
