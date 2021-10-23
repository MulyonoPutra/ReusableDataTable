import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/interface/table-column';
import { ProjectStatusService } from 'src/app/services/project-status.service';

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.scss'],
})
export class ProjectStatusComponent implements OnInit {
  projects: any;

  projectsStatusTableColumns!: TableColumn[];

  constructor(private projectService: ProjectStatusService) {}

  ngOnInit(): void {
    this.findAllProjectStatus();
    this.initColumns();
  }

  findAllProjectStatus() {
    this.projectService.findAllProjectStatus().subscribe((response) => {
      this.projects = response.data.projects;
      console.log(this.projects);
    });
  }

  initColumns(): void {
    this.projectsStatusTableColumns = [
      { name: 'Title', dataKey: 'title' },
      { name: 'Research Method', dataKey: 'research_method' },
      { name: 'Created At', dataKey: 'created_at' },
      { name: 'Description', dataKey: 'description' },
      { name: 'Visibility', dataKey: 'visibility' },
    ];
  }
}
