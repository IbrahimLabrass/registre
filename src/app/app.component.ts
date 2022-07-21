import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registreForm!:FormGroup
  title = 'Mypro';
  submitted=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   
  }

  
}
