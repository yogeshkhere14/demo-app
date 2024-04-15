import { Component, NgZone } from "@angular/core";
import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/_services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loginForm!: FormGroup;
  isSubmitted: boolean = false;
  loading: boolean = false;
  invalidCredentials: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private auth: Auth,
    public ngZone: NgZone
  ) {}

  ngOnInit() {
    const user = this.authService.isLoggedIn;
    if (user) {
      // If user authenticated
      this.router.navigateByUrl("");
    }
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    this.loading = true;
    signInWithEmailAndPassword(
      this.auth,
      this.form["email"].value.toLowerCase(),
      this.form["password"].value
    )
      .then((result: any) => {
        this.authService.setUserData(result.user);
        this.ngZone.run(() => {
          this.router.navigateByUrl("");
          this.loading = false;
          this.invalidCredentials = false;
        });
      })
      .catch((error: any) => {
        this.loading = false;
        this.invalidCredentials = true;
      });
  }
}
