import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent {

  @Output() toggleSideNav: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() isMobile: boolean = false;
  isOpened: boolean = true;
  constructor( public authService: AuthService) {
  }
  onLogout(){
    this.authService.Logout()
  }
  onIconToggle(){
    this.isOpened = !this.isOpened
    // this.toggleSideNav.emit(this.isOpened)
  }

}
