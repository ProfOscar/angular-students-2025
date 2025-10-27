import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  studentList: any[] = [
    { "name": "Pippo", "city": "Fossano", "gender": "M", "present": true },
    { "name": "Pluto", "city": "Cuneo", "gender": "M", "present": true },
    { "name": "Minnie", "city": "Alba", "gender": "F", "present": false },
    { "name": "Sonny", "city": "Torino", "gender": "M", "present": true },
    { "name": "Sally", "city": "Fossano", "gender": "F", "present": false },
    { "name": "Elly", "city": "Genola", "gender": "F", "present": true },
    { "name": "Fanny", "city": "Cuneo", "gender": "M", "present": false },
    { "name": "Sandy", "city": "Alba", "gender": "F", "present": true },
    { "name": "John", "city": "Torino", "gender": "M", "present": false },
    { "name": "Joe", "city": "Torino", "gender": "M", "present": true },
    { "name": "Jack", "city": "Fossano", "gender": "M", "present": true }
  ];

  student: any = {};

  maleColor = "lightblue";
  femaleColor = "pink";

  constructor() {
    // let pos = this.generaNumero(0, this.studentList.length);
    // this.student = this.studentList[pos];
  }

  generaNumero(a: number, b: number) {  // b escluso
    return Math.floor((b - a) * Math.random()) + a;
  }

  getStyle(student:any) {
    const color: string = student.gender == "F" ? this.femaleColor : this.maleColor;
    const decoration: string = student.present ? "none" : "underline";
    const weight: string = student.present ? "normal" : "bold";

    return {
      "backgroundColor": color,
      "textDecoration": decoration,
      "font-weight": weight
    }
  }
}
