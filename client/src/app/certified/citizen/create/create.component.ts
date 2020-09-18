import { NotificationService } from './../../../services/notification.service';
import { CanChanges } from './../../../guards/status-changes.guard';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, CanChanges {


  form: FormGroup;
  submit: boolean = false;
  constructor(private service: ServicesService, private serviceNotification:NotificationService,private router:Router) { }

  permission(): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    if (!this.form.get('cedula').value) {
      return true;
    } else {
        this.serviceNotification.openSnackBar("Desea salir y perder cambios",null);
    }
  };

  ngOnInit() {
    this.form = new FormGroup({
      identification_card: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      first_name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
      last_name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
    });
  }

  public createCitizen() {
    const identification_card = this.form.get('identification_card').value;
    const first_name = this.form.get('first_name').value;
    const last_name = this.form.get('last_name').value;
    const address = this.form.get('address').value;
    const email = this.form.get('email').value;
    const phone = this.form.get('phone').value;
    var data = {
      identification_card: identification_card,
      first_name: first_name,
      last_name: last_name,
      address: address,
      email: email,
      phone: phone
    };
    this.service.create_citizen(data).subscribe(
      done => {
        this.serviceNotification.openSnackBar("Ciudadano registrado", null);
        this.router.navigate(['/certified']);
        this.onReset();
      },
      error => {
        if (error.error.phone) {
          this.serviceNotification.openSnackBar(error.error.phone[0], null);
        } else if (error.error.email) {
          this.serviceNotification.openSnackBar(error.error.email[0], null);
        } else if (error.error.identification_card) {
          this.serviceNotification.openSnackBar(error.error.identification_card[0], null);
        }
      }
    );
  }


  onSubmit() {
    this.submit = true;
    if (this.form.invalid) {
      return;
    } else {
      this.createCitizen();
    }
  }

  onReset() {
    this.submit = false;
    this.form.reset();
  }

}
