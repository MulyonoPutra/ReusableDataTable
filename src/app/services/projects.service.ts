import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjects, Projects } from '../interface/projects';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  
  endpoint: string = environment.PROJECT_URL;

  constructor(private http: HttpClient) {}

  findAllProjects() {
    return this.http.get<IProjects>(this.endpoint).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
