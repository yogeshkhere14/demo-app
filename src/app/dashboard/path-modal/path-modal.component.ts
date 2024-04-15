import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FilesService } from "src/app/_services/files.service";

@Component({
  selector: "app-path-modal",
  templateUrl: "./path-modal.component.html",
  styleUrls: ["./path-modal.component.scss"],
})
export class PathModalComponent {
  constructor(public dialogRef: MatDialogRef<PathModalComponent>, private fileService: FilesService) {

  }
  pathName!: string;
  onCancel() {
    this.dialogRef.close();
  }

  onUpdate(){
   const data = {
      id: Math.random() * 1000,
      file: this.pathName,
      date: new Date().toISOString(),
      size: '60 Kb',
    };

    this.fileService.updateFiles(data).subscribe(
      (res) => {
        if(res){
          this.dialogRef.close(res)
        }
      });
    
  }

  
  
}
