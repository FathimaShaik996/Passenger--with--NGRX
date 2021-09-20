import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  resetPassengerDetailSuccess,
  setPassengerDetailSuccess,
} from '../app/store/passenger-details.actions';
import { PassengerDataService } from '../passenger-data.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css'],
})
export class PassengerDetailsComponent implements OnInit {
  passengerForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private passengerService: PassengerDataService,
    private route: Router,
    private store: Store<any>
  ) {}
  ngOnInit(): void {
    this.passengerForm = this.formBuilder.group({
      lastname: ['', [Validators.required, Validators.maxLength(10)]],
      firstname: ['', [Validators.required, Validators.maxLength(12)]],
      address: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.passengerForm.invalid) {
      return;
    } else {
      // this.passengerService.setPassengerDetails(this.passengerForm.value);

      this.store.dispatch(
        setPassengerDetailSuccess({ passengerDetail: this.passengerForm.value })
      );
      this.route.navigate(['/payment']);
    }
  }

  onReset(): void {
    this.submitted = false;
    this.store.dispatch(resetPassengerDetailSuccess());
  }
}
