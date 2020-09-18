import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from './../dialog-confirmation/dialog-confirmation.component';
import { AuthenticationService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy, AfterViewInit {

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  username: string = "";
  photo: string = "";


  constructor(private router: Router, private dialog: MatDialog, private authService: AuthenticationService, private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('current_user')).username;
    var avatar = JSON.parse(localStorage.getItem('current_user')).avatar;
    this.photo = `http://127.0.0.1:8000${avatar}`;

  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
