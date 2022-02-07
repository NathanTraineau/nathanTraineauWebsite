import { Component, OnInit } from '@angular/core';
import { browserRefresh } from '../../app.component';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
})
export class ResumePageComponent implements OnInit {
  public browserRefresh!: boolean;

  cvPaths = {
    cv_december_2021: '../../../assets/cv-nathan-26-12621.png',
    cv_january_2022: '../../../assets/cv-nathan-6-2-20221.png',
  };

  title!: string;
  modal!: string;
  modalImg!: String;
  cvPath!: String;

  modalImgPath!: String;

  ngOnInit(): void {
    this.title = 'zertyu';
    this.modal = 'none';
    this.cvPath = this.cvPaths.cv_january_2022;
    this.browserRefresh = browserRefresh;
  }

  openDocument(documentPath: String) {
    this.modal = 'block';
    this.modalImgPath = documentPath;
  }

  closeDocument(event: any) {
    console.log(
      '🚀 ~ file: resume-page.component.ts ~ line 37 ~ ResumePageComponent ~ closeDocument ~ event',
      event,
    );
    if (event.target.className == 'modal') {
      this.modal = 'none';
    }
  }

  public buttons: Object = [
    {
      click: this.closeDocument.bind(this),
      // Accessing button component properties by buttonModel property
      buttonModel: {
        content: 'Yes',
        //Enables the primary button
        isPrimary: true,
      },
    },
    {
      click: this.closeDocument.bind(this),
      // Accessing button component properties by buttonModel property
      buttonModel: {
        content: 'No',
      },
    },
  ];
}
