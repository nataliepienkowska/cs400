import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  data: any;
  display = false;

  currencyFormGroup= new FormGroup(
    {
      amountOfDollars: new FormControl(''),
    });

  onSubmit() {
    console.log(`Sending ${this.currencyFormGroup.value}`);
  }

  getData(name: string){
      this.data = this.http.get('http://localhost:3000/ps6');
      return this.data;
    }

    ngOnInit() {
    }

    constructor(private http: HttpClient) { }

}
