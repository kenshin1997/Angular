import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('formElement') inputForm: NgForm;
  form = {
    email: '',
    message: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.form.email = this.inputForm.value.email;
    this.form.message = this.inputForm.value.textarea;
    console.log(this.form);
  }

}
