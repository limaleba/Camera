import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imgURL;

  constructor(
    private camera: Camera,
    private DomSanitizer: DomSanitizer
  ) {
  }

  getCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) => {
      console.log(res);
      this.imgURL = 'data:image/jpeg;base64,' + res;

    }).catch(e => {
      console.log(e);
    })

  }


  getGallery() {

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG
    }).then((res) => {
      console.log(res);
      this.imgURL = 'data:image/jpeg;base64,' + res;
    }).catch(e => {
      console.log(e);
    })


  }

}


