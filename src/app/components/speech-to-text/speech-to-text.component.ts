import { Component, OnInit } from '@angular/core';
import { TestspeechService } from 'src/app/services/testspeech.service';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],
  providers: [TestspeechService]
})
export class SpeechToTextComponent implements OnInit {
  bDisabled: boolean= false
  text: string;
  bToggle: boolean = false;
 
  constructor(public service : TestspeechService) {
    this.service.init()
   }
 
  ngOnInit(): void {
  }
 
  startService(){
    this.service.start()
    this.bDisabled = true;
  }
 
  stopService(){
    this.service.stop();
    this.bDisabled = false
  }

}
