import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatCardModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: any [] = [];

  constructor() {}

  ngOnInit(): void{

  }

}
