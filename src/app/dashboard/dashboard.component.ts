import { BreakpointObserver, Breakpoints, MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  isMobile: boolean = false;
  onLogout() {
    this.authService.Logout();
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public authService: AuthService,
    private breakpoint: BreakpointObserver
  ) {    this.breakpoint
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe((res) => {
        if (res) {
          this.isMobile = res.matches;
        }
      });
  }

  ngOnDestroy(): void {
  }
}
