import { Component, Inject} from '@angular/core';
import { MatDialogModule,
        MAT_DIALOG_DATA,
        MatDialogTitle,
        MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [MatDialogModule, MatDialogTitle, MatDialogContent, MatButtonModule ],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
