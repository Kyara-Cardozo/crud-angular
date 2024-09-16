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



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class CoursesModule { }

// O componente standalone fora do módulo


@Component({
  selector: 'app-courses-alt',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatIconModule,
    CategoryPipe
  ],
  templateUrl: './courses/courses.component.html',
  styleUrls: ['./courses/courses.component.scss']
})
export class CoursesComponent implements OnInit {

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
