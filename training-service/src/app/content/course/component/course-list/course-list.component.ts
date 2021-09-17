import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../../model/course';
import { CourseService } from '../../service/course.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() name = '';
  @Input() courses: Course[] = [];
  private sub: Subscription | undefined;

  summaryUrl = '/summary';
  selectedCourses: string[] = [];


  private patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  mailForm = new FormGroup({
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.pattern(this.patternEmail)
    ])
  });

  constructor(private route: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourseList(this.name).subscribe(courseNames => {
      console.log(courseNames);
      this.courses = courseNames;
    });
  }

  convertDurationToTime = (item: number) => item * 1000;


  courseClick = (event: any, name: string) => {
    if (event.target.checked) {
      this.selectedCourses.push(name);
    } else {
      this.selectedCourses = this.selectedCourses.filter(a => a !== name);
    }
  }

  onEmailSubmit = (event: any) => {
    this.courseService.courses = this.selectedCourses;
    this.courseService.email = event.email;
    this.route.navigate([this.summaryUrl]);
  }

  show = (): boolean => this.selectedCourses.length > 0;

  categoryUrl = () => this.route.navigate(['/category']);

}
