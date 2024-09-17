import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CategoryPipe } from '../../shared/pipes/category.pipe';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, CategoryPipe],
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns: string[] = ['name', 'category', 'actions'];

  constructor() { }

  onEdit(course: Course) {
    this.edit.emit(course);
  }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }
}
