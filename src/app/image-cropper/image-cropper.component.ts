import { Component } from '@angular/core';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent {
  // Image cropper state
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  maintainAspectRatio = true;
  aspectRatio = 4 / 3;

  // NG-ZORRO upload component settings
  fileList: NzUploadFile[] = [];
  uploading = false;

  // Handle file selection
  onFileChange(event: any): void {
    this.imageChangedEvent = event;
    this.showCropper = true;
  }

  // Image cropper callbacks
  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }

  imageLoaded(): void {
    console.log('Image loaded');
  }

  cropperReady(): void {
    console.log('Cropper ready');
  }

  loadImageFailed(): void {
    console.error('Load image failed');
  }

  // Upload handling
  beforeUpload = (file: NzUploadFile): boolean => {
    const reader = new FileReader();
    reader.onload = (loadEvent: any) => {
      this.imageChangedEvent = { target: { files: [file] } };
      this.showCropper = true;
    };
    reader.readAsDataURL(file as any);
    return false; // Prevent default upload
  };

  // Submit the cropped image
  submit(): void {
    this.uploading = true;
    // Here you would typically upload the croppedImage to your server
    console.log('Submitting:', this.croppedImage);
    setTimeout(() => {
      this.uploading = false;
    }, 1000);
  }
}
