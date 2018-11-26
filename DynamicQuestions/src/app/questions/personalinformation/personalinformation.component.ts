import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css']
})
export class PersonalinformationComponent implements OnInit {
 // saIdParser = require('south-african-id-parser');
  isIDNumberValid = "";
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
        [Validators.required]
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
    // console.log(this.saIdParser.parse('9001049818080').isValid);
    // this.isIDNumberValid = this.saIdParser.parse('9001049818080').isValid;
    
  }

  invalidIDNumber(control: FormControl): { [s: string]: boolean } {
    let saIdParser = require('south-african-id-parser');
    
    if (saIdParser.parse('9001049080').isValid === false) {     
      return { 'invalidIDNumber': true };
    }
    return null;
  }
}