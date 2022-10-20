import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { CommonModule } from '@angular/common';
// import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stream-record',
  templateUrl: './stream-record.component.html',
  styleUrls: ['./stream-record.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default
})
export class StreamRecordComponent implements OnInit, OnDestroy {
  isPlaying = false;
  displayControls = true;
  isAudioRecording = false;
  audioRecordedTime;
  audioBlobUrl;
  audioBlob;
  audioName;
  audioStream;
  audioConf = { audio: true}
  filesize: Blob;
  constructor(private ref: ChangeDetectorRef, private audioRecordingService: AudioRecordingService,private sanitizer: DomSanitizer) 
  {
    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isAudioRecording = false;
      this.ref.detectChanges();
 });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.audioRecordedTime = time;
      this.ref.detectChanges();
    });

    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.audioBlob = data.blob;
      this.audioName = data.title;
      this.audioBlobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      console.log("The audioBlob URL====>>>>>", this.audioBlobUrl);
      
      this.ref.detectChanges();
    });
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.abortAudioRecording();
  }
  startAudioRecording() {
    if (!this.isAudioRecording) {
      this.isAudioRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortAudioRecording() {
    if (this.isAudioRecording) {
      this.isAudioRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopAudioRecording() {
    if (this.isAudioRecording) {
      this.audioRecordingService.stopRecording();
      this.isAudioRecording = false;
    }
  }

  clearAudioRecordedData() {
    this.audioBlobUrl = null;
  }

  downloadAudioRecordedData() {
    this._downloadFile(this.audioBlob, 'audio/mp3', this.audioName);
  }
  _downloadFile(data: any, type: string, filename: string): any {
    const blob = new Blob([data], { type: type });
    const url = window.URL.createObjectURL(blob);
    //this.video.srcObject = stream;
    //const url = data;
    const anchor = document.createElement('a');
    anchor.download = filename;
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
  Upload()
  {
  //   try 
  //   {
  //     let sRetrieveSignedUrlBody =
  //       {
  //         "fileName": this.audioName,
  //         "folderId": 107,
  //         "contentType": 'audio/mp3',
  //         "method": "PUT",
  //         // "folderName": "/users/" + userName + "/Home/_upload",
  //         "folderName": "",
  //         "subFolder": '',
  //       };
  //       this.oDataService.UploadImageService_RetrieveSignedUrl(sRetrieveSignedUrlBody).subscribe(result=> 
  //         {
  //           if(result.status == 'success')
  //           {
  //             this.filesize = this.ImageService.data()
  //             let body = 
  //           {
  //             className: "",
  //             contentType: 'audio/mp3',
  //             contentUrl: "#cloudstorage",
  //             fileName: this.audioName,
  //             folderId: 107,
  //             folderName: "",
  //             provider: "cloudstorage",
  //             size: this.filesize.size,
  //             title: this.audioName,
  //             url: "#cloudstorage",
  //           }
  //           this.oDataService.UploadImageService_SaveFileObject(body).subscribe(result=> 
  //             {
  //               console.log("The Result ====>>>>>>", result);
                
  //             })
  //           }
  //         })
  //   } 
  //   catch (error) {
      
  //   }
  }
}
