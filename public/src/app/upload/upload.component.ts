import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UploadService } from './upload.service';

const URL = '/api/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  public files:any;
  public files_path: any;
  public error: String;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  constructor(
    public _uploadService: UploadService
  ) { }

  ngOnInit() {
    this.files = [];
    this.files_path = [];
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      response = JSON.parse(response);
      this.files.push(response);
      this.files_path.push(response.location);
    }
  }

  addListing(address){
    address.value["paths"] = this.files_path;
    this._uploadService.addListing(address.value)
    .then()
    .catch((err) => this.error = err._body)
    console.log(this.error);
    this.uploader.clearQueue();
    address.resetForm();
    this.files = [];
    this.files_path = [];
  }

  deleteListing(key){
    for(var i = 0; i < this.files.length; i++){
      if(this.files[i].key == key){
        this.files.splice(i, 1)
      }
    }
    key = {key : key}
    this._uploadService.removeImage(key)
    .then()
    .catch()
  }
}
