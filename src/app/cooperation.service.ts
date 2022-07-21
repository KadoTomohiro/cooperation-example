import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CooperationNotice} from "./cooperation-notice";

@Injectable({
  providedIn: 'root'
})
export class CooperationService {

  constructor(private http: HttpClient) {

  }

  getCooperationNotice(code: string): Observable<CooperationNotice> {
    return this.http.get<CooperationNotice>(`http://localhost:8080/cooperation/${code}`)
  }
}
