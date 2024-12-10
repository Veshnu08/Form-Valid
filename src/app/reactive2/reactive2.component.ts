import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../_helpers/must-match.validator';



@Component({
  selector: 'app-reactive2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.css']
})
export class Reactive2Component  implements OnInit{

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router : Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          // validates date format yyyy-mm-dd
          dob: [
            '',
             [ Validators.required,
               Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
             ]
            ],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          city:['',Validators.required],
          state:['',Validators.required],
          zipcode:['',Validators.required],
          file :['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
        }, 
        {
            validators: MustMatch('password', 'confirmPassword')
        });
    }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
        console.log('Form is invlid:', this.registerForm.errors)
          return;
      }
      console.log('Form is valid, navigating to /sample');
      this.router.navigate(['/sample']).catch((err) => {
        console.error('Navigation error:', err);
      });
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
