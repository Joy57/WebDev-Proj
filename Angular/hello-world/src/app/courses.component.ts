import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    
    </ul>
    `//html markup to render in this component
})

export class CoursesComponent{
    //define a field to hold title of the page
    title = "List of courses";
    courses;
    //define a method to get some value
    // getTitle(){
    //     return this.title;
    // }

    //list of courses
    // courses = ["course1", "course2", "course3"];

    //Logic for calling an HTTP service


    constructor(service: CoursesService) { 
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }


}

