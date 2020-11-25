import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispatcher-options',
  templateUrl: './dispatcher-options.component.html',
  styleUrls: ['./dispatcher-options.component.less']
})
export class DispatcherOptionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDispatchMainPageComponent(): void{
    this.router.navigate(['./dispatch-main-page/dispatch-main-page.component']);
  }

}
