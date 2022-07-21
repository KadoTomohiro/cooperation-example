import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CooperationService} from "../cooperation.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AgreementService} from "../agreement.service";
import {Agreement, NewAgreement} from "../agreement";

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {

  form: FormGroup = this.fb.group({
    agency: [''],
    name: [''],
    price: [0]
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private cooperationService: CooperationService,
    private agreementService: AgreementService
  ) {
    const code = this.route.snapshot.queryParamMap.get('cooperationCode')
    console.log(code)

    if(code) this.cooperationService.getCooperationNotice(code).subscribe(notice => {
      this.form.patchValue({agency: notice.agency})
    })
  }

  ngOnInit(): void {
  }

  submit() {
    const agreement: NewAgreement = this.form.value
    console.log(agreement)
    this.agreementService.postAgreement(agreement)
      .subscribe(() => this.router.navigateByUrl('/'))
  }

}
