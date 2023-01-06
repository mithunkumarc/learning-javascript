#### service: AppService, declare subject

      import { Injectable } from '@angular/core';
      import { Subject } from 'rxjs';

      @Injectable({
        providedIn: 'root',
      })
      export class AppService {
        private subjecte: Subject<number> = new Subject<number>();
        constructor() {}

        getSubject() {
          return this.subjecte;
        }

        sendData() {
          this.subjecte.next(100);
        }
      }

#### First Component: HomeComponent, send data to subject


        import { CommonModule } from '@angular/common';
        import { Component, Input, OnInit } from '@angular/core';
        import { AppService } from '../shared/app.service';

        @Component({
          selector: 'app-home',
          standalone: true,
          imports: [],
          template: `<p>Welcome home!
          <button (click)="message()">click</button>
          </p>`,
        })
        export class HomeComponent implements OnInit {
          constructor(private appService: AppService) {}

          ngOnInit(): void {
            this.appService.getSubject().subscribe(data => console.log("home : ",data));
          }

          message() {
            this.appService.sendData();
          }
        }

#### app.Component.ts: subscribing to subject using appservice


        import { CommonModule } from '@angular/common';
        import { Component } from '@angular/core';
        import { RouterModule } from '@angular/router';
        import { AppService } from './shared/app.service';

        /**
         * https://javascript.plainenglish.io/the-new-features-of-angular-v14-851995870f59
         */
        @Component({
          selector: 'app-root',
          standalone: true,
          imports: [CommonModule, RouterModule],
          templateUrl: './app.component.html',
        })
        export class AppComponent {
          value: number = 0;
          constructor(private appService: AppService) {

          }

          ngOnInit(): void {
            this.appService.getSubject().subscribe(v => {
              this.value = this.value+v
            })
          }
        }
        
#### app.component.html

        <h1>Angular 14 subject val: {{value}}</h1>
