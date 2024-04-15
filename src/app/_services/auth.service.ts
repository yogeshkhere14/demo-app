import { Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { Auth, onAuthStateChanged, signOut } from "@angular/fire/auth";
import { User } from "firebase/auth";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  UserData!: User;
  constructor(
    private auth: Auth,
    private router: Router,
    public ngZone: NgZone
  ) {
    onAuthStateChanged(this.auth, (user: User | null) => {
      if (user) {
        this.UserData = user;
        localStorage.setItem("demo-user", JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem("demo-user")!);
      } else {
        localStorage.setItem("demo-user", "null");
        JSON.parse(localStorage.getItem("demo-user")!);
      }
    });
  }

  //get Authenticated user from firebase
  getAuthFire() {
    return this.auth.currentUser;
  }

  //get Authenticated user from Local Storage
  getAuthLocal() {
    const token = localStorage.getItem("demo-user");
    const user = JSON.parse(token as string);
    return user;
  }

  //Check wither User Is looged in or not
  get isLoggedIn(): boolean {
    const token = localStorage.getItem("demo-user");
    const user = JSON.parse(token as string);
    return user !== null ? true : false;
  }

  setUserData(data: User) {
    this.UserData = data;
  }

  //Logout
  Logout() {
    signOut(this.auth).then(() => this.router.navigate(["/login"]));
  }

  // Send Password Reset Email
  // async sendPasswordResetEmails(email: string) {
  //   sendPasswordResetEmail(this.auth, email)
  //     .then((res) => {
  //     console.log(res)
  //     })
  //     .catch((error) => {
  //           console.log(error)
  //     });
  // }
}
