import { NotificationService } from './../../../services/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Component, OnInit } from '@angular/core';
interface Category {
  id: string;
  name: string;
}
@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.scss']
})
export class AddOptionComponent implements OnInit {

  categories: Category[] = [];
  form: FormGroup;
  constructor(private service: ServicesService, private serviceNotification: NotificationService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category_id: new FormControl('',[Validators.required]),
    });
    this.get_category();
  }

  get_category() {
    this.service.get_category().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.log(error)
      }
    );
  }

  create_option() {
    var name: string = this.form.get('name').value;
    var category: string = this.form.get('category_id').value;
    var data = { name: name, category: category };
    console.log(data)
    this.service.create_option(data).subscribe(
      data => {
        this.serviceNotification.openSnackBar("Opción creada", null);
        this.onReset();
      },
      error => { console.log(error) }
    );
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      this.create_option();
    }
  }

  onReset() {
    this.form.reset();
  }

}
