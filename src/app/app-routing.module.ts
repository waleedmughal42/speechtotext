import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeechToTextComponent } from './components/speech-to-text/speech-to-text.component';
import { StreamRecordComponent } from './components/stream-record/stream-record.component';
import { SttTestComponent } from './components/stt-test/stt-test.component';

const routes: Routes = [
  {
    path: '',
    component: SpeechToTextComponent
  },
  {
    path: 'stt',
    component: SttTestComponent
  }
  // {
  //   path: 'stream',
  //   component: StreamRecordComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
