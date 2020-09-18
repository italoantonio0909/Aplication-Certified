import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/services/services.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ELEMENT_DATA: any = [];
  displayedColumns: string[] = ['position', 'identification_card', 'name'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.get_citizen();
    this.dataSource.sort = this.sort;
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  get_citizen() {
    this.service.get_citizen().subscribe(
      data => {
        data.forEach(element => {
          this.ELEMENT_DATA.push({ 'identification_card': element.identification_card, 'position': element.id, 'first_name': element.first_name, 'last_name': element.last_name });
        });
      },
      error => { }
    );
  }


}
