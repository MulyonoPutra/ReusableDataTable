import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/interface/table-column';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projects: any;

  projectsTableColumns!: TableColumn[];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.findAllProject();
    this.initColumns();
  }

  findAllProject() {
    this.projectService.findAllProjects().subscribe((response) => {
      this.projects = response.data;
    });
  }

  initColumns(): void {
    this.projectsTableColumns = [
      { name: 'Title', dataKey: 'title' },
      { name: 'Description', dataKey: 'description' },
      { name: 'Status', dataKey: 'status' },
      { name: 'Progress', dataKey: 'progress' },
      { name: 'Expired', dataKey: 'expired' },
    ];
  }
}
