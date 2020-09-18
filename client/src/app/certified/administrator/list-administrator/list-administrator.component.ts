import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-list-administrator',
  templateUrl: './list-administrator.component.html',
  styleUrls: ['./list-administrator.component.scss']
})
export class ListAdministratorComponent implements OnInit {

  constructor(private service: ServicesService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ELEMENT_DATA: any = [];
  displayedColumns: string[] = ['username', 'email','avatar'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.get_administrator();
    this.dataSource.sort = this.sort;
  }

  get_administrator() {
    this.service.get_administrator().subscribe(
      data => {
        data.forEach(element => {
            this.ELEMENT_DATA.push({'username':element.username,'email':element.email,'avatar':element.avatar});
        });
      },
      error => { }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


}
