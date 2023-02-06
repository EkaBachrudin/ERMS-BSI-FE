import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, tap, take } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AuthenticateStart } from 'src/app/state/store/actions/auth/auth.actions';
import { Subscription } from 'rxjs';
import { AlertMessage } from 'src/app/utils/helpers';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private responsive: BreakpointObserver,
    private store: Store<AppState>
  ) {}

  public showPassword: boolean = false;
  private closeSub: Subscription;
  private storeSub: Subscription;
  ngOnInit(): void {
    this.responsive
      .observe(Breakpoints.HandsetLandscape)
      .subscribe((result) => {});
    this.storeSub = this.store.select('auth').subscribe((authState) => {
      if (authState.error) {
        AlertMessage(authState.error, 'center', 'error');
      }
    });
  }
  nip = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.nip.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return 'You must enter a value';
  }
  async toLogin() {
    const login: any = {
      nip: this.nip.value,
      password: this.password.value,
    };
    this.store.dispatch(new AuthenticateStart(login));
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
