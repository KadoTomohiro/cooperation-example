import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Agreement, NewAgreement} from "./agreement";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AgreementService {

  constructor(private http: HttpClient) { }

  getAgreements(): Observable<Agreement[]> {
    return this.http.get<Agreement[]>('http://localhost:8080/agreement')
  }

  postAgreement(agreement: NewAgreement): Observable<void> {
    return this.http.post<void>('http://localhost:8080/agreement', agreement)
  }
}
