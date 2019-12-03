import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DmDividerModule } from './dm-divider.module';

import { DmLibTplModule } from '@dimanoid/ngx-dm-hotkeys';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule, CommonModule,
        FormsModule, ReactiveFormsModule,
        DmDividerModule, DmLibTemplateModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
