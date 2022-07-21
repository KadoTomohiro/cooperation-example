import { Component, OnInit } from '@angular/core';
import {AgreementService} from "../agreement.service";
import {Observable} from "rxjs";
import {Agreement} from "../agreement";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  agreements: Observable<Agreement[]>

  constructor(private service: AgreementService) {
    this.agreements = this.service.getAgreements()
  }

  ngOnInit(): void {
  }

}
