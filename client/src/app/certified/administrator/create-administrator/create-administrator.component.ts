import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { NotificationService } from './../../../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface HtmlInput extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-create-administrator',
  templateUrl: './create-administrator.component.html',
  styleUrls: ['./create-administrator.component.scss']
})
export class CreateAdministratorComponent implements OnInit {

  file: File;
  photoSelected: ArrayBuffer | string;
  form: FormGroup;
  constructor(private service: ServicesService, private serviceNotification: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      this.create_administrator();
    }
  }

  create_administrator() {
    var first_name = this.form.get('first_name').value;
    var last_name = this.form.get('last_name').value;
    var email = this.form.get('email').value;
    var username = this.form.get('username').value;
    var password = this.form.get('password').value;

    const formCreate = new FormData();
    formCreate.append('first_name', first_name);
    formCreate.append('last_name', last_name);
    formCreate.append('email', email);
    formCreate.append('username', username);
    formCreate.append('password1', password);
    formCreate.append('password2', password);
    formCreate.append("avatar", this.file, this.file.name);

    this.service.create_administrator(formCreate).subscribe(
      data => {
        this.serviceNotification.openSnackBar("Administrador creado", null);
        this.router.navigate(['/certified']);
      },
      error => {
        if (error.error.password1) {
          this.serviceNotification.openSnackBar(error.error.password1[0], null);
        } else if (error.error.username) {
          this.serviceNotification.openSnackBar(error.error.username[0], null);
        } else if (error.error.email) {
          this.serviceNotification.openSnackBar(error.error.email[0], null);
        } else if (error.error.avatar) {
          this.serviceNotification.openSnackBar(error.error.avatar[0], null);
        }
        console.log(error)
      }
    );
  }

  onPhotoSelected(event: HtmlInput): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

}
