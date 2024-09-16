import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = 'api/courses'

  constructor(private httpClient: HttpClient) { }

  save(record: Course) {
    return this.httpClient.post<Course>(this.API, record);
  }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        //delay(6000),
        tap(courses => console.log(courses))
      );
  }
}
