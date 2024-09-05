import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable,  of, catchError} from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryPipe } from '../../shared/pipes/category.pipe';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,
            MatTableModule,
            MatCardModule,
            MatToolbarModule,
            MatProgressSpinnerModule,
            MatButtonModule,
            MatDialogModule,
            CategoryPipe
          ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //courses: Course[] = [{ _id: "1", name: "Curso Angular", category: "Front-end" }];
  courses: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category'];
  //courseService: CoursesService;

constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
){
    this.courses$ = this.coursesService.list();
      .pipe(
      catchError(error => {
        this.onError('Erro ao carregar a lista de cursos');
        return of ([])
      })
    );
  }
  onError ( erroMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg,
    })
  }
  ngOnInit(): void {
    //this.courses = this.coursesService.list();
  }
}
