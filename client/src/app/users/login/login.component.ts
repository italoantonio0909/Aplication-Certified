import { NotificationService } from './../../services/notification.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private notification: NotificationService, private router: Router) { }


  form: FormGroup;
  hideCurrentPassword: boolean;


  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      this.login();
    }
  }


  login() {
    var username = this.form.get('username').value;
    var password = this.form.get('password').value;
    var data = { username: username, password: password };
    this.authService.auth_login(data).subscribe(
      data => {
        localStorage.setItem('token', data.key);
        this.authService.auth_me().subscribe(
          data => {
            localStorage.setItem('current_user', JSON.stringify(data))
            this.router.navigate(['/certified']);
          },
          error => { console.log(error) }
        );

      }, error => {
        this.notification.openSnackBar("No puede iniciar sesión con las credenciales proporcionadas.", null);
      }
    )
  };
}