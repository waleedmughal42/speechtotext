import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  DataService_UploadImage(body): Observable<any>
    {
      let httpOptions = 
      {
        headers: new HttpHeaders({
          'Accept':'*/*',
          'x-app-name':'main',
          'x-org-name':'cloud',
          'Authorization':'Bearer '+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjg1LCJ1c2VySWQiOiJ3YWxlZWQiLCJmaXJzdE5hbWUiOiJXYWxlZWQiLCJsYXN0TmFtZSI6Ik11Z2hhbCIsInJvbGUiOiJhZG1pbiIsIm9yZ05hbWUiOiJjbG91ZCIsInRlbmFudElkIjoiMSIsInRlbmFudE5hbWUiOiJjbG91ZCIsInRlbmFudFByb3BzIjp7ImRpc3BsYXlOYW1lIjoiQ2xvdWQgLSBPRE0iLCJuYW1lIjoiY2xvdWQifSwiYXBwT3JnTmFtZSI6ImNsb3VkIiwiZW1haWwiOiJ3YWxlZWRAdHJpbGxvLmlvIiwiZW1haWxWZXJpZmllZCI6ImZhbHNlIiwiaXNzIjoiYXBwLm9uZWRpYW1vbmQudHJpbGxvYXBwcy5jb20iLCJqdGkiOiJhM2U0NWQ3Yi0wZDg2LTQzYjAtOTVmZC0xMWMxNGMwNTFkOGQiLCJpYXQiOjE2NjU1NzgyODcsImV4cCI6MTY2NjE4MzA4N30.uIfkieFs6gPxgIqcsK-tkt0L80S-z1r_hb_pgbHbhW8VLq0ZTXUqhcXkD_qiL8J3NmvMqbWvanGt3xXqGyjYfA"
        })
      }
      return this.http.post<any>('https://app.onediamond.trilloapps.com' + '/foldersvc/cloudstorage/upload', body,httpOptions);
    }
    
    DataService_STTConvertor(body): Observable<any>
    {
      let httpOptions = 
      {
        headers: new HttpHeaders({
          'Accept':'*/*',
          'x-app-name':'main',
          'x-org-name':'cloud',
          'Content-Type'  : 'application/json',
          'Authorization':'Bearer '+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjg1LCJ1c2VySWQiOiJ3YWxlZWQiLCJmaXJzdE5hbWUiOiJXYWxlZWQiLCJsYXN0TmFtZSI6Ik11Z2hhbCIsInJvbGUiOiJhZG1pbiIsIm9yZ05hbWUiOiJjbG91ZCIsInRlbmFudElkIjoiMSIsInRlbmFudE5hbWUiOiJjbG91ZCIsInRlbmFudFByb3BzIjp7ImRpc3BsYXlOYW1lIjoiQ2xvdWQgLSBPRE0iLCJuYW1lIjoiY2xvdWQifSwiYXBwT3JnTmFtZSI6ImNsb3VkIiwiZW1haWwiOiJ3YWxlZWRAdHJpbGxvLmlvIiwiZW1haWxWZXJpZmllZCI6ImZhbHNlIiwiaXNzIjoiYXBwLm9uZWRpYW1vbmQudHJpbGxvYXBwcy5jb20iLCJqdGkiOiJhM2U0NWQ3Yi0wZDg2LTQzYjAtOTVmZC0xMWMxNGMwNTFkOGQiLCJpYXQiOjE2NjU1NzgyODcsImV4cCI6MTY2NjE4MzA4N30.uIfkieFs6gPxgIqcsK-tkt0L80S-z1r_hb_pgbHbhW8VLq0ZTXUqhcXkD_qiL8J3NmvMqbWvanGt3xXqGyjYfA"
        })
      }
      return this.http.post<any>('https://app.onediamond.trilloapps.com' + '/ds/function/shared/Google_STT_TTS', body,httpOptions);
    }
}
