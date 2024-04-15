import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { FileData } from "../_models/FileData";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilesService {
  constructor(private http: HttpClient) {}
  filesData!: FileData[]
  getAllFiles() {
    return this.http.get<FileData[]>(`${environment.apiUrl}/files`).pipe(
      map((data) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.filesData = data;
        return data;
      }));
  }

  updateFiles(newData: any) {
    return this.http.get<FileData[]>(`${environment.apiUrl}/files`).pipe(
      map(() => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.filesData.unshift(newData);
        return this.filesData;
      })
    );
  }
}
