import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  name: string = ' Juan';
  color: string = 'yellow';
  myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  hasError = (field: string): boolean => {
    return this.myForm.get(field)?.invalid || false;
  };

  save = () => {
    this.name = 'Pedro';
  };

  changeColor = () => {
    this.color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  };
}
