import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-menu-solicitante',
  templateUrl: './menu-solicitante.component.html',
  styleUrls: ['./menu-solicitante.component.css']
})
export class MenuSolicitanteComponent implements OnDestroy {
  public query: string;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.query = 'Hospital';
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  onLogout() {
    return this.authService.logout();
  }
}
