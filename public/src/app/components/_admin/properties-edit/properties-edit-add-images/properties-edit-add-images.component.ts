import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UploadService } from '../../../../services/upload.service';
import { PropertiesService } from '../../../../services/properties.service';

const URL = '/api/upload';

@Component({
  selector: 'app-properties-edit-add-images',
  templateUrl: './properties-edit-add-images.component.html',
  styleUrls: ['./properties-edit-add-images.component.css']
})
export class PropertiesEditAddImagesComponent implements OnInit {

  @Output() showAdd = new EventEmitter();
  @Input() showAddID;
  public uploader:FileUploader = new FileUploader({url: URL});
  public files:any;
  public files_path: any;
  public showButton: boolean = false;

  constructor(
    public _uploadService: UploadService,
    public _listingService: PropertiesService
  ) { }

  ngDoCheck(){
    this.uploader.queue.length == this.files.length? this.showButton = true : this.showButton = false;
  }

  ngOnInit() {
    this.files = [];
    this.files_path = [];
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      response = JSON.parse(response);
      this.files.push(response);
      this.files_path.push(response.location);
    }
  }

  toggleShow(){
    this.showAdd.emit();
  }

  async addMoreImages(){
    var info = {
      paths: this.files_path,
      id: this.showAddID
    }
    var images = await this._listingService.addMoreImages(info);
    this.uploader.queue.length, this.files.length, this.files_path.length = 0;
    this.toggleShow();
  }
}
