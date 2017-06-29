import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sign-Up Reactive Form';

  accounts = ['Free', 'Basic', 'Premium'];
  genders = ['Male', 'Female'];

  signupForm: FormGroup;

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      userid: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      profile: this.fb.group({
        account: ['', Validators.required],
        gender: ['']
      }),
      emailDeals: false
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
