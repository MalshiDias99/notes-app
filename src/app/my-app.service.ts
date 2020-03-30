import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class MyAppService {
  private addUserUrl = `http://localhost:8080/api/signup`;
  private signupUrl = `http://localhost:8080/api/user/login`;


  constructor(private http: HttpClient) {}

  public adduser(user): Observable<any> {
    console.log(user);
    return this.http.post(this.addUserUrl, user);
  }

  public loginuser(user): Observable<any> {
    console.log(user);
    return this.http.post(this.signupUrl, user);
  }


  
}
