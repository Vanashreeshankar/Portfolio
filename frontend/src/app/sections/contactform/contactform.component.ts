import { ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HelperService } from '../../helper.service';
import { MaterialModule } from '../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactformComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContactformComponent>,
    private contactService: HelperService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe(
        response => {
          console.log('Message sent successfully!', response);
          this.dialogRef.close();
        },
        error => {
          console.error('Error sending message', error);
        }
      );
    }
  }

  close() {
    this.dialogRef.close();
  }
}