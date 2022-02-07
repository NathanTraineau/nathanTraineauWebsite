import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { browserRefresh } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public browserRefresh: boolean = false;

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  ngOnInit(): void {
    this.browserRefresh = browserRefresh;
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    this._renderer2.appendChild(this._document.body, script);
  }

  ongr() {
    console.log('ertyuioiuytr');
  }

  onbeforeunload = function () {
    // handle the exit event
    alert('ertyuio');
  };
}
