import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechToTextComponent } from './components/speech-to-text/speech-to-text.component';
import { BrowserModule } from '@angular/platform-browser';
import { SttTestComponent } from './components/stt-test/stt-test.component';
// import { AudioRecordingService } from './services/audio-recording.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SpeechToTextComponent,
    SttTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
