import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  edited: boolean = false;
  filter1: boolean = false;
  content: boolean = false;
  gender: boolean = false;

  constructor() { }
  dropDownContent(a: string): void{
    console.log(a);
    if (a === 'gender') {
      this.gender = !this.gender;
    }
    if (a === 'content') {
      this.content = !this.content;
    }
  }
  dropDownFilter(): void{
    this.edited = !this.edited;
  }

  dropDownFilterShow(): void{
    this.filter1 = !this.filter1;
  }
  ngOnInit(): void {
  }

}
