import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormRecord,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-employeefroms',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employeeform.html',
  styleUrls: ['./employeeform.css'],
})
export class Employeefroms {
  name = new FormControl('', Validators.required);
  account =new FormGroup({
  email :new FormControl('', [Validators.required, Validators.email]),
  password :new FormControl('', Validators.required)
});
skills = new FormArray([
  new FormControl('Angular'),
  new FormControl('React'),
  new FormControl('Vue')
]);
preferences = new FormRecord({
  darkMode: new FormControl(false),
  notifications: new FormControl(true),
});
addskill(){
  this.skills.push(new FormControl(''));
}
removeskill(index : number){
  this.skills.removeAt(index);
}
addpreference(){
  const key = 'perf_'+Object.keys(this.preferences.controls).length;
  this.preferences.addControl('autoUpdate', new FormControl(false));
}
submit(){
  const data={
    name : this.name.value,
    account : this.account.value,
    skills : this.skills.value,
    preferences : this.preferences.value
  };
  console.log('Employee Data', data);
  alert(JSON.stringify(data, null, 2));
}}
