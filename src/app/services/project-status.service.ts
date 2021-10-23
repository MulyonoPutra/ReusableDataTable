import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjectStatus, Root } from '../interface/project-status';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectStatusService {
  
  endpoint: string = environment.PROJECT_STATUS;

  constructor(private http: HttpClient) {}

  findAllProjectStatus() {
    return this.http.get<Root>(this.endpoint).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
