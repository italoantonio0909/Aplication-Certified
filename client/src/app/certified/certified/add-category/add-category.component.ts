import { NotificationService } from './../../../services/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private service: ServicesService, private serviceNotification: NotificationService) { }

  submit: boolean = false;
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  create_category() {
    var name: string = this.form.get('name').value;
    var data = { name: name };
    this.service.create_category(data).subscribe(
      data => {
        this.serviceNotification.openSnackBar("Categoría registrada", null);
        this.onReset();
      },
      error => {
        if (error.error.name) {
          this.serviceNotification.openSnackBar(error.error.name[0], null);

        }
      }
    );
  }

  onReset() {
    this.form.reset();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      this.create_category();
    }
  }



}
