import { MatSort } from '@angular/material/sort';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, AfterViewInit {

  posts: IPost[] = [];

  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'author', 'title', 'category'];

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor() {
    this.posts = [
      {
        id: '1',
        author: 'Annisa',
        title: 'title',
        category: 'category',
      },
      {
        id: '2',
        author: 'Ega',
        title: 'title',
        category: 'category',
      },
      {
        id: '3',
        author: 'Yumna',
        title: 'title',
        category: 'category',
      },
      {
        id: '4',
        author: 'Yumna',
        title: 'title',
        category: 'category',
      },
      {
        id: '5',
        author: 'Yumna',
        title: 'title',
        category: 'category',
      },
      {
        id: '6',
        author: 'Yumna',
        title: 'title',
        category: 'category',
      },
      {
        id: '7',
        author: 'Yumna',
        title: 'title',
        category: 'category',
      },
      {
        id: '8',
        author: 'Yumna',
        title: 'title',
        category: 'category',
      },
      {
        id: '8',
        author: 'Yumna',
        title: 'title',
        category: 'category',
      },
      {
        id: '9',
        author: 'Yumna',
        title: 'title',
        category: 'category',
      },
      {
        id: '10',
        author: 'Yumna',
        title: 'title',
        category: 'category',
      },
    ];

    this.dataSource = new MatTableDataSource(this.posts);
  }

  ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}

  applyFilter(event: any) {
    console.log('event' + event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

