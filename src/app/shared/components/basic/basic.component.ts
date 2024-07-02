import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // onKeyUp(eve : Event){
  // console.log((eve.target as HTMLInputElement).value);
  
  // }
}
