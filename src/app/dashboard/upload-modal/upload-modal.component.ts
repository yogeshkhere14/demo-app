import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss']
})
export class UploadModalComponent {
  fileToUpload!: any;
  fileName!: string;
  constructor(public dialogRef: MatDialogRef<UploadModalComponent>){
  
  }

  onFileChange(files: any) {
    const reader = new FileReader();
    const file = files.target.files[0]
    reader.addEventListener(
      "loadend",
      () => {
        // convert image file to base64 string
        this.fileToUpload = reader.result;
        this.fileName = file.name;
      },
      false
    );

    if (file) {
      reader.readAsBinaryString(file);
    }
  }

  removeFile(){
    this.fileName = '';
    this.fileToUpload = null;
  }

  onCancel() {
    this.dialogRef.close();
  }
}
