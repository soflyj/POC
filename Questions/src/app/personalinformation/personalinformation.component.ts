import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from '../custom-validators'


@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css']
})
export class PersonalinformationComponent implements OnInit {
  personalinformationForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.personalinformationForm = new FormGroup({
      'firstname': new FormControl(
        null,
        [Validators.required]
      ),
      'lastname': new FormControl(
        null,
        [Validators.required]
      ),
      'idnumber': new FormControl(
        null,
        [Validators.required, CustomValidators.invalidIDNumber]
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'telephonenumber': new FormControl(
        null,
        [Validators.required]
      ),
    });

  }

  onSubmit() {
    console.log(this.personalinformationForm.value);
  }
}