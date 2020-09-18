import { ServicesService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: ServicesService) { }

  quantity_citizen: number = 0;
  quantity_administrator: number = 0;
  quantity_category_certified: number = 0;
  ngOnInit(): void {
    this.get_citizen();
    this.get_administrator();
    this.get_category_certified();
  }

  get_citizen() {
    this.service.get_citizen().subscribe(
      data => { this.quantity_citizen = data.length },
      error => { }
    );
  }

  get_administrator() {
    this.service.get_administrator().subscribe(
      data => { this.quantity_administrator = data.length },
      error => { }
    );
  }

  get_category_certified() {
    this.service.get_category_certified().subscribe(
      data => { this.quantity_category_certified = data.length },
      error => { }
    );

  }

}
