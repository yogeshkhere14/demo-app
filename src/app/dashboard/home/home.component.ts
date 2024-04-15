import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PathModalComponent } from '../path-modal/path-modal.component';
import { UploadModalComponent } from '../upload-modal/upload-modal.component';
import { FilesService } from 'src/app/_services/files.service';
import { FileData } from 'src/app/_models/FileData';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['file', 'date', 'size'];
  dataSource!: MatTableDataSource<FileData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isMobile: boolean = false;

  constructor(private breakpoint: BreakpointObserver, public dialog: MatDialog, private filesService: FilesService) {
    this.breakpoint
    .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
    .subscribe((res) => {
      if (res) {
        this.isMobile = res.matches;
      }
    });
    this.getAllFiles()
  }

  getAllFiles(){
    this.filesService.getAllFiles().subscribe((res: any)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openPathDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dailog = this.dialog.open(PathModalComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dailog.afterClosed().subscribe(result => {
      if(result){
        this.dataSource = new MatTableDataSource(result);
      }
    });
  }
  openUploadDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UploadModalComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}