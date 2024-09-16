import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Course } from '../model/course';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class CoursesService {
  private readonly API = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        tap(courses => console.log(courses))
      );
  }
}


interface Course {
  id: number;
  name: string;
}
