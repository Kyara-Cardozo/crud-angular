import { CoursesService } from './services/courses.service';
import { NgModule, OnInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { MatIconModule } from '@angular/material/icon';
import { CategoryPipe } from '../shared/pipes/category.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class CoursesModule { }

// O componente standalone fora do módulo



<<<<<<< HEAD
  courses$: Observable<Course[]>; // Usando um Observable para a lista de cursos

  displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor(private coursesService: CoursesService) {
    // Inicializando o Observable courses$
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {
    // Coloque qualquer inicialização necessária aqui, por exemplo:
    // Poderia ser usado para manipulações extras após a injeção de dependência
  }
}
=======
>>>>>>> b393700 (tratamento CORS)
