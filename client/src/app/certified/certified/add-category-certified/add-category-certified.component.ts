import { Router } from '@angular/router';
import { NotificationService } from './../../../services/notification.service';
import { ServicesService } from 'src/app/services/services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

interface HtmlInput extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-add-category-certified',
  templateUrl: './add-category-certified.component.html',
  styleUrls: ['./add-category-certified.component.scss']
})
export class AddCategoryCertifiedComponent implements OnInit {

  file: File;
  photoSelected: ArrayBuffer | string;
  form: FormGroup;

  constructor(private router: Router, private service: ServicesService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }
  onPhotoSelected(event: HtmlInput): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      this.create_category_certified();
    }
  }

  create_category_certified() {
    var name = this.form.get('name').value;
    const save = new FormData();
    save.append('name', name);
    save.append('avatar', this.file, this.file.name);
    this.service.create_category_certified(save).subscribe(
      data => {
        this.notification.openSnackBar("Categoría creada", null);
        this.form.reset();
        this.router.navigate(['/certified']);
      },
      error => {
        console.log(error)
        if (error.error.name) {
          this.notification.openSnackBar(error.error.name[0], null);
        } else if (error.error.avatar) {
          this.notification.openSnackBar(error.error.avatar[0], null);
        }
      }
    );
  }
}
