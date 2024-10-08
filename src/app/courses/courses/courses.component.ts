import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, of, catchError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CategoryPipe } from '../../shared/pipes/category.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseFormComponent } from '../course-form/course-form.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    CategoryPipe,
    CourseFormComponent,
    CoursesListComponent
  ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Inicializando o observable de cursos
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar a lista de cursos');
        return of([]);
      })
    );
  }

  onError(erroMsg: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg,
    });
  }

  onAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnInit(): void { }
}
