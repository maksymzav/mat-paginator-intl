import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns = ['index', 'name'];
  datasource: MatTableDataSource<any>;
  data = [];

  pageSizeOptions = [10, 15, 25, 50, 100];
  pageSize = 15;
  currentPage = 0;

  ngOnInit() {
    for (let index = 0; index < 1059; index++) {
      this.data.push({index, name: 'name' + index});
    }

    this.datasource = new MatTableDataSource(this.data.slice(0, this.pageSize));
  }

  pageChanged(event: PageEvent){
    const start = event.pageIndex * event.pageSize;
    const end = Math.min(start + event.pageSize, this.data.length -1);
    this.datasource = new MatTableDataSource(this.data.slice(start, end));
  }
}
