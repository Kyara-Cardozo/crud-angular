import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = 'http://localhost:8080/api/courses'

  constructor(private httpClient:HttpClient){ }

  list(){
  return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      //delay(6000),
      tap(courses => console.log(courses))
    );
  }
}
